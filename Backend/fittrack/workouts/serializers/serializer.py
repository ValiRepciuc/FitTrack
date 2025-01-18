from rest_framework import serializers
from workouts.models import Workout, WorkoutExercise, Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'description', 'muscle_group']
        

class WorkoutExerciseSerializer(serializers.ModelSerializer):
    exercise_name = serializers.CharField(source='exercise.name', read_only=True)

    class Meta:
        model = WorkoutExercise
        fields = ['id', 'workout', 'exercise', 'exercise_name', 'sets', 'reps', 'weight']


class WorkoutSerializer(serializers.ModelSerializer):
    exercise = WorkoutExerciseSerializer(source='workoutexercise_set', many=True, read_only=True)

    class Meta:
        model = Workout
        fields = ['id', 'name', 'type', 'description', 'duration', 'difficulty', 'exercise']


