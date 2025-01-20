# from rest_framework import serializers
# from workouts.models import Workout, WorkoutExercise, Exercise

# class ExerciseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Exercise
#         fields = ['id', 'name', 'description', 'muscle_group']
        

# class WorkoutExerciseSerializer(serializers.ModelSerializer):
#     exercise_name = serializers.CharField(source='exercise.name', read_only=True)

#     class Meta:
#         model = WorkoutExercise
#         fields = ['id', 'workout', 'exercise', 'exercise_name', 'sets', 'reps', 'weight']


# class WorkoutSerializer(serializers.ModelSerializer):
#     # exercise = WorkoutExerciseSerializer(source='workoutexercise_set', many=True, read_only=True)
#     exercises = serializers.ListField(
#         child=serializers.IntegerField(), write_only=True
#     )

#     exercise_details = WorkoutExerciseSerializer(
#         source='workoutexercise_set', many=True, read_only=True
#     )

#     class Meta:
#         model = Workout
#         fields = ['id', 'name', 'type', 'description', 'duration', 'difficulty', 'exercises', 'exercise_details']

#     def create(self, validated_data):
#         exercises = validated_data.pop('exercises')
#         workout = Workout.objects.create(**validated_data)
#         for exercise_id in exercises:
#             exercise = Exercise.objects.get(id=exercise_id)
#             WorkoutExercise.objects.create(workout=workout, exercise=exercise)
#         return workout
    
#     def update(self, instance, validated_data):
#         exercise = validated_data.pop('exercises', None)
#         for attr, value in validated_data.items():
#             setattr(instance, attr, value)
#         instance.save()

#         if exercise:
#             instance.workoutexercise_set.all().delete()
#             for exercise_id in exercise:
#                 exercise = Exercise.objects.get(id=exercise_id)
#                 WorkoutExercise.objects.create(workout=instance, exercise=exercise)

#         return instance

from rest_framework import serializers
from workouts.models import Workout, WorkoutExercise, Exercise

class WorkoutExerciseInputSerializer(serializers.Serializer):
    exercise = serializers.IntegerField()  # ID-ul exercițiului
    sets = serializers.IntegerField()
    reps = serializers.IntegerField()
    weight = serializers.DecimalField(max_digits=5, decimal_places=2)


class WorkoutExerciseSerializer(serializers.ModelSerializer):
    exercise_name = serializers.CharField(source='exercise.name', read_only=True)

    class Meta:
        model = WorkoutExercise
        fields = ['id', 'workout', 'exercise', 'exercise_name', 'sets', 'reps', 'weight']



class WorkoutSerializer(serializers.ModelSerializer):
    exercises = WorkoutExerciseInputSerializer(many=True, write_only=True)  # Lista exercițiilor cu detalii
    exercise_details = WorkoutExerciseSerializer(source='workoutexercise_set', many=True, read_only=True)

    class Meta:
        model = Workout
        fields = ['id', 'name', 'type', 'description', 'duration', 'difficulty', 'exercises', 'exercise_details']

    def create(self, validated_data):
        exercises_data = validated_data.pop('exercises')  # Obține lista de exerciții
        workout = Workout.objects.create(**validated_data)  # Creează workout-ul

        # Creează relațiile cu exercițiile
        for exercise_data in exercises_data:
            exercise = Exercise.objects.get(id=exercise_data['exercise'])
            WorkoutExercise.objects.create(
                workout=workout,
                exercise=exercise,
                sets=exercise_data['sets'],
                reps=exercise_data['reps'],
                weight=exercise_data['weight']
            )
        return workout

    def update(self, instance, validated_data):
        exercises_data = validated_data.pop('exercises', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if exercises_data is not None:
            # Șterge relațiile existente și adaugă altele noi
            instance.workoutexercise_set.all().delete()
            for exercise_data in exercises_data:
                exercise = Exercise.objects.get(id=exercise_data['exercise'])
                WorkoutExercise.objects.create(
                    workout=instance,
                    exercise=exercise,
                    sets=exercise_data['sets'],
                    reps=exercise_data['reps'],
                    weight=exercise_data['weight']
                )
        return instance

