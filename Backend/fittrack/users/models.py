from django.db import models
from django.contrib.auth.models import AbstractUser

from workouts.models import Workout
# Create your models here.


class CustomUser(AbstractUser):
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    height = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    workouts = models.ManyToManyField(Workout, related_name='users')

    def __str__(self):
        return self.username