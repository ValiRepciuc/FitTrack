from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = (
        *UserAdmin.fieldsets,  # Include câmpurile standard ale UserAdmin
        (
            'Additional Info',  # Titlu pentru secțiunea personalizată
            {
                'fields': (
                    'date_of_birth',
                    'gender',
                    'height',
                    'weight',
                    'profile_picture',
                ),
            },
        ),
    )
    list_display = ['username', 'email', 'date_of_birth', 'gender']

admin.site.register(CustomUser, CustomUserAdmin)
