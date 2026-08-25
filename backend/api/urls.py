from django.urls import path
from . import views

urlpatterns = [
    path('auth/register/', views.register_user, name='register_user'),
    path('stripe/create-payment-intent/', views.create_payment_intent, name='create_payment_intent'),
    path('subscribe/', views.activate_subscription, name='activate_subscription'),
    path('trials/', views.create_trial_request, name='create_trial_request'),
    path('service-request/', views.create_service_request, name='create_service_request'),
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
