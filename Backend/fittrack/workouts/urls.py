from django.urls import path
from .views import StatsView, WorkoutListCreateView


urlpatterns = [
    path('stats/', StatsView.as_view(), name='stats'),
    path('workouts/', WorkoutListCreateView.as_view(), name='workouts'),
]