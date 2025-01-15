from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken  
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
# Create your views here.

User = get_user_model()

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')


        user = authenticate(username=username, password=password)

        if user:
            token = get_tokens_for_user(user)
            return Response({'refresh': token['refresh'],
                             'access': token['access'],
                             'username': user.username,
                             'email': user.email,
                        }, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        date_of_birth = request.data.get('date_of_birth')
        height = request.data.get('height')
        weight = request.data.get('weight')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)


        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            date_of_birth=date_of_birth,
            height=height,
            weight=weight
        )

        tokens = get_tokens_for_user(user)

        return Response({
            'message': 'User created successfully',
            'refresh': tokens['refresh'],
            'access': tokens['access'],
        }, status=status.HTTP_201_CREATED)