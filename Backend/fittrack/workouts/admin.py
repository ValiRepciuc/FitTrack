from django.contrib import admin
from .models import Workout, Exercise, WorkoutExercise

class WorkoutExerciseInline(admin.TabularInline):
    model = WorkoutExercise
    extra = 1  # Permite adăugarea de noi relații în Admin Panel


@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'duration')
    inlines = [WorkoutExerciseInline]  # Adaugă tabela intermediară în pagina Workout


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('name', 'muscle_group')


@admin.register(WorkoutExercise)
class WorkoutExerciseAdmin(admin.ModelAdmin):
    list_display = ('workout', 'exercise', 'sets', 'reps', 'weight')
