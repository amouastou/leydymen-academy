from django.urls import path
from .views import RegistrationCreateListView

urlpatterns = [path('registrations/', RegistrationCreateListView.as_view(), name='registrations')]
