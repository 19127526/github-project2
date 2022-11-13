from django.contrib import admin
from history.models import Prescription, DrugPrescription
# Register your models here.
admin.site.register(Prescription)
admin.site.register(DrugPrescription)