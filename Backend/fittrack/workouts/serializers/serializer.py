from rest_framework import serializers
from workouts.models import Workout, WorkoutExercise, Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'description', 'muscle_group']

class WorkoutExerciseInputSerializer(serializers.Serializer):
    exercise = serializers.IntegerField()  # ID-ul exercițiului
    sets = serializers.IntegerField()
    reps = serializers.IntegerField()
    weight = serializers.DecimalField(max_digits=5, decimal_places=2)

class WorkoutExerciseSerializer(serializers.ModelSerializer):
    exercise_details = ExerciseSerializer(source='exercise', read_only=True)

    class Meta:
        model = WorkoutExercise
        fields = ['id', 'exercise', 'exercise_details', 'sets', 'reps', 'weight']

class WorkoutSerializer(serializers.ModelSerializer):
    exercises = WorkoutExerciseInputSerializer(many=True, write_only=True)  # Acceptăm exercițiile ca input
    exercise_details = WorkoutExerciseSerializer(
        source='workoutexercise_set', many=True, read_only=True
    )  # Returnăm detalii despre exercițiile asociate

    class Meta:
        model = Workout
        fields = ['id', 'name', 'type', 'description', 'duration', 'difficulty', 'exercises', 'exercise_details']

    def create(self, validated_data):
        exercises_data = validated_data.pop('exercises')  # Scoatem exercițiile din datele validate
        user = self.context['request'].user  # Obținem utilizatorul logat
        validated_data.pop('user', None)  # Scoatem user-ul din datele validate
        workout = Workout.objects.create(user=user, **validated_data)  # Creăm workout-ul

        # Creăm relațiile între workout și exerciții
        for exercise_data in exercises_data:
            WorkoutExercise.objects.create(
                workout=workout,
                exercise=Exercise.objects.get(id=exercise_data['exercise']),
                sets=exercise_data['sets'],
                reps=exercise_data['reps'],
                weight=exercise_data['weight']
            )
        return workout
