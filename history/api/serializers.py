from rest_framework import serializers
from history.models import Prescription, DrugPrescription

class PrescriptionSerializer(serializers.ModelSerializer):
    prescription_id = serializers.PrimaryKeyRelatedField(read_only=True, many=True)
    class Meta:
        model = Prescription
        fields = '__all__'

class DrugPrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrugPrescription
        fields = '__all__'
