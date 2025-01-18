from django.db import models
from django.contrib.auth.models import AbstractUser

from workouts.models import Workout
# Create your models here.


class CustomUser(AbstractUser):
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(
        max_length=6,
        choices=[('Male', 'Male'), ('Female', 'Female')],
        blank=True,
        null=True
    )
    height = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)

    def __str__(self):
        return self.username