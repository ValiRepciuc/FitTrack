from django.urls import path
from .views import ExerciceListView, StatsView, WorkoutListCreateView


urlpatterns = [
    path('stats/', StatsView.as_view(), name='stats'),
    path('workouts/', WorkoutListCreateView.as_view(), name='workouts'),
    path('exercises/', ExerciceListView.as_view(), name='exercises'),
]