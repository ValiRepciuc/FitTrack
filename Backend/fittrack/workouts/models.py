from django.db import models

# Create your models here.


class Workout(models.Model):
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE, related_name='workouts', default=1)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    duration = models.IntegerField(null=True, blank=True)
    difficulty = models.CharField(
        max_length=20,
        choices=[('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')],
        default='Beginner'
    )
    exercices = models.ManyToManyField('Exercise', through='WorkoutExercise', related_name='workouts')

    def __str__(self):
        return self.name
    
class Exercise(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    muscle_group = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class WorkoutExercise(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.IntegerField()
    reps = models.IntegerField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    
    def __str__(self):
        return f'{self.workout.name} - {self.exercise.name}'  