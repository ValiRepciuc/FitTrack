from django.db.models import Sum, F
from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response 
from .models import Workout, WorkoutExercise
# Create your views here.


User = get_user_model()

class StatsView(APIView):
    def get(self, request):
        total_users = User.objects.count()
        total_workouts = Workout.objects.count()
        total_kg_lifted = WorkoutExercise.objects.aggregate(total_kg_lifted=Sum(F('weight') * F('reps') * F('sets')))['total_kg_lifted'] or 0

        return Response({
            'total_users': total_users,
            'total_workouts': total_workouts,
            'total_kg_lifted': total_kg_lifted
        })