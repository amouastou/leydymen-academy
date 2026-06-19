from rest_framework import generics, permissions
from .models import Registration
from .serializers import RegistrationSerializer


class RegistrationCreateListView(generics.ListCreateAPIView):
    queryset = Registration.objects.all().order_by("-created_at")
    serializer_class = RegistrationSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]