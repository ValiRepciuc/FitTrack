from django.db.models import Sum, F
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response

from workouts.serializers.serializer import ExerciseSerializer, WorkoutSerializer 
from .models import Exercise, Workout, WorkoutExercise
# Create your views here.


User = get_user_model()

class StatsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        total_users = User.objects.count()
        total_workouts = Workout.objects.count()
        total_kg_lifted = WorkoutExercise.objects.aggregate(total_kg_lifted=Sum(F('weight') * F('reps') * F('sets')))['total_kg_lifted'] or 0

        return Response({
            'total_users': total_users,
            'total_workouts': total_workouts,
            'total_kg_lifted': total_kg_lifted
        })


class WorkoutListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        workouts = Workout.objects.filter(user=request.user)
        serializer = WorkoutSerializer(workouts, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = WorkoutSerializer(data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

class ExerciceListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        exercise = Exercise.objects.all()
        serializer = ExerciseSerializer(exercise, many=True)
        return Response(serializer.data)
    
