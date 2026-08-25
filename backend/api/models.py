from django.db import models
from django.utils import timezone

class UserSubscription(models.Model):
    PLAN_CHOICES = [
        ('academic', 'Academic Plan'),
        ('commercial', 'Commercial Nanofab'),
        ('enterprise', 'Enterprise Foundry'),
    ]

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255, blank=True)
    company = models.CharField(max_length=255, blank=True)
    plan_tier = models.CharField(max_length=50, choices=PLAN_CHOICES, default='academic')
    billing_cycle = models.CharField(max_length=20, default='monthly')
    is_active = models.BooleanField(default=True)
    payment_reference = models.CharField(max_length=100, blank=True, null=True)
    stripe_customer_id = models.CharField(max_length=100, blank=True, null=True)
    stripe_payment_intent_id = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.username} - {self.plan_tier} ({'Active' if self.is_active else 'Inactive'})"


class TrialRequest(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255, blank=True)
    software_choice = models.CharField(max_length=100, default='MLA 150')
    comments = models.TextField(blank=True)
    status = models.CharField(max_length=50, default='Pending Review')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Trial #{self.id} - {self.full_name} ({self.software_choice})"


class ContactInquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Inquiry from {self.name} - {self.subject}"


class OpticalServiceRequest(models.Model):
    user_name = models.CharField(max_length=255)
    user_email = models.EmailField()
    company_name = models.CharField(max_length=255, blank=True)
    project_title = models.CharField(max_length=255)
    service_type = models.CharField(max_length=100)
    industry = models.CharField(max_length=100, blank=True)
    wavelength_range = models.CharField(max_length=100, blank=True)
    system_specifications = models.TextField(blank=True)
    status = models.CharField(max_length=50, default='Submitted')
    admin_notes = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Service Req #{self.id} - {self.project_title}"


class SoftwareProduct(models.Model):
    name = models.CharField(max_length=255)
    code_name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    category = models.CharField(max_length=100, default='System')
    version = models.CharField(max_length=50, default='2.6.0')
    price_monthly = models.DecimalField(max_digits=10, decimal_places=2, default=149.00)

    def __str__(self):
        return f"{self.name} v{self.version}"
