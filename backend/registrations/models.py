from django.db import models

class Registration(models.Model):
    BOOTCAMPS = [('spring','Spring Boot • Angular • PostgreSQL'),('django','Django • Angular • PostgreSQL'),('flutter','Flutter • Django • Firebase')]
    full_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=30)
    email = models.EmailField()
    city = models.CharField(max_length=100, blank=True)
    school_or_company = models.CharField(max_length=150, blank=True)
    level = models.CharField(max_length=50)
    bootcamp = models.CharField(max_length=30, choices=BOOTCAMPS)
    programming_level = models.CharField(max_length=50)
    has_laptop = models.CharField(max_length=10)
    motivation = models.TextField(blank=True)
    discovery_source = models.CharField(max_length=50, blank=True)
    preferred_contact = models.CharField(max_length=30, default='WhatsApp')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} - {self.get_bootcamp_display()}'
