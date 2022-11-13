from django.urls import path
from scanner.api.views import Scanning

urlpatterns = [
    path('generate', Scanning, name='DrugPrescriptionList'),
]
