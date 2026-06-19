from django.contrib import admin
from .models import Registration

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email', 'bootcamp', 'level', 'created_at')
    list_filter = ('bootcamp', 'level', 'programming_level', 'has_laptop', 'created_at')
    search_fields = ('full_name', 'phone', 'email', 'school_or_company')
