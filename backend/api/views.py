import json
from django.contrib import messages
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import UserSubscription, TrialRequest, ContactInquiry, OpticalServiceRequest, SoftwareProduct
from .db_mongo import (
    sync_user_to_mongodb,
    sync_trial_request_to_mongodb,
    sync_contact_inquiry_to_mongodb,
    sync_service_request_to_mongodb
)

def extract_django_messages(request, default_level='info', fallback_msg=None):
    """
    Extracts queued Django framework messages and returns them formatted for ToastNotification frontend context.
    """
    msg_list = []
    storage = messages.get_messages(request)
    for msg in storage:
        level_tag = msg.level_tag or default_level
        if level_tag == 'danger':
            level_tag = 'error'
        msg_list.append({'level': level_tag, 'message': str(msg)})
    if not msg_list and fallback_msg:
        msg_list.append({'level': default_level, 'message': fallback_msg})
    return msg_list


def verify_admin_access(request):
    """
    Validates X-Admin-Passcode header against configured passcode (aliabbas1234578!).
    """
    passcode = request.headers.get('X-Admin-Passcode') or request.META.get('HTTP_X_ADMIN_PASSCODE')
    expected = getattr(settings, 'ADMIN_PASSCODE', 'aliabbas1234578!')
    return passcode == expected


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    data = request.data
    email = data.get('email')
    username = data.get('username') or email.split('@')[0] if email else None
    plan_tier = data.get('plan_tier', 'academic')

    if not email:
        return Response({'error': 'Email address is required.'}, status=status.HTTP_400_BAD_REQUEST)

    user, created = UserSubscription.objects.get_or_create(
        email=email,
        defaults={
            'username': username,
            'full_name': data.get('full_name', ''),
            'company': data.get('company', ''),
            'plan_tier': plan_tier,
            'is_active': True
        }
    )

    if created:
        messages.success(request, f"Account registered successfully for {email} on {plan_tier} tier.")
        sync_user_to_mongodb(user)
    else:
        messages.info(request, f"Welcome back, {email}.")

    msgs = extract_django_messages(request)
    return Response({
        'success': True,
        'user': {
            'email': user.email,
            'username': user.username,
            'plan_tier': user.plan_tier,
            'is_active': user.is_active
        },
        'messages': msgs
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def create_payment_intent(request):
    data = request.data
    plan_tier = data.get('plan_tier', 'academic').lower()
    prices = {'academic': 149, 'commercial': 499, 'enterprise': 999}
    amount = prices.get(plan_tier, 149)

    client_secret = f"pi_mllmla_mock_secret_{amount}_{data.get('email', 'guest')}"
    messages.info(request, f"Stripe PaymentIntent generated for ${amount}.")
    msgs = extract_django_messages(request)

    return Response({
        'success': True,
        'clientSecret': client_secret,
        'amount': amount,
        'currency': 'usd',
        'messages': msgs
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def activate_subscription(request):
    data = request.data
    email = data.get('email')
    plan_tier = data.get('plan_tier', 'academic')

    if not email:
        return Response({'error': 'Email required for activation.'}, status=status.HTTP_400_BAD_REQUEST)

    ref_code = f"STRIPE-MLLMLA-{UserSubscription.objects.count() + 100000}"
    user, _ = UserSubscription.objects.get_or_create(email=email, defaults={'username': email.split('@')[0]})
    user.plan_tier = plan_tier
    user.is_active = True
    user.payment_reference = ref_code
    user.save()

    sync_user_to_mongodb(user)

    messages.success(request, f"Subscription for {email} activated with ref {ref_code}.")
    msgs = extract_django_messages(request)

    return Response({
        'success': True,
        'payment_reference': ref_code,
        'plan_tier': user.plan_tier,
        'messages': msgs
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def create_trial_request(request):
    data = request.data
    trial = TrialRequest.objects.create(
        full_name=data.get('full_name', ''),
        email=data.get('email', ''),
        company=data.get('company', ''),
        software_choice=data.get('systemChoice', 'MLA 150'),
        comments=data.get('notes', '')
    )
    sync_trial_request_to_mongodb(trial)

    messages.success(request, f"Trial request #{trial.id} submitted for {trial.software_choice}.")
    msgs = extract_django_messages(request)
    return Response({'success': True, 'trial_id': trial.id, 'messages': msgs})


@api_view(['POST'])
@permission_classes([AllowAny])
def create_service_request(request):
    data = request.data
    service = OpticalServiceRequest.objects.create(
        user_name=data.get('user_name', ''),
        user_email=data.get('user_email', ''),
        company_name=data.get('company_name', ''),
        project_title=data.get('project_title', 'Nanofab Project'),
        service_type=data.get('service_type', 'Maskless Lithography'),
        system_specifications=data.get('specs', '')
    )
    sync_service_request_to_mongodb(service)

    messages.success(request, f"Project service request #{service.id} submitted.")
    msgs = extract_django_messages(request)
    return Response({'success': True, 'service_id': service.id, 'messages': msgs})


@api_view(['GET'])
@permission_classes([AllowAny])
def admin_analytics(request):
    if not verify_admin_access(request):
        return Response({'error': 'Unauthorized Executive Passcode Required.'}, status=status.HTTP_403_FORBIDDEN)

    total_users = UserSubscription.objects.count()
    active_subs = UserSubscription.objects.filter(is_active=True).count()
    trial_count = TrialRequest.objects.count()
    service_count = OpticalServiceRequest.objects.count()

    users_data = list(UserSubscription.objects.values('id', 'username', 'email', 'company', 'plan_tier', 'is_active')[:10])

    return Response({
        'success': True,
        'analytics': {
            'total_users': total_users,
            'active_subscriptions': active_subs,
            'trial_requests': trial_count,
            'service_requests': service_count,
            'db_sync_status': 'SQLite + MongoDB Atlas Dual Sync Online'
        },
        'users': users_data
    })
