from rest_framework import generics
from .models import Registration
from .serializers import RegistrationSerializer

class RegistrationCreateListView(generics.ListCreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
