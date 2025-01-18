from rest_framework import serializers
from users.models import CustomUser


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'date_of_birth',
            'gender',
            'height',
            'weight',
            'profile_picture',
        ]

        read_only_fields = ['id', 'username', 'email']