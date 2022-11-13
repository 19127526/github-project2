from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from history.models import DrugPrescription, Prescription
from history.api.serializers import PrescriptionSerializer, DrugPrescriptionSerializer

class DrugPrescriptionList(APIView):
    def get(self, request):
        drugPrescriptions = DrugPrescription.objects.all()
        serializer = DrugPrescriptionSerializer(drugPrescriptions, many=True)
        return Response(serializer.data)

class PrescriptionList(APIView):
    def get(self, request):
        Prescriptions = Prescription.objects.all()
        serializer = PrescriptionSerializer(Prescriptions, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PrescriptionSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PrescriptionDetail(APIView):
    def get_object(self, pk):
        try:
            return Prescription.objects.get(pk=pk)
        except Prescription.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        prescription = self.get_object(pk)
        serializer = PrescriptionSerializer(prescription)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        prescription = self.get_object(pk)
        prescription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        prescription = self.get_object(pk)