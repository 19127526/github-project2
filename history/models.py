from django.db import models

# Create your models here.
class Prescription(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    note = models.CharField(max_length=100)
    image = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.note + ' | ' + str(self.date)
class DrugPrescription(models.Model):
    prescription = models.ForeignKey(Prescription, related_name='prescription_id', on_delete=models.CASCADE)
    drugName = models.CharField(max_length=100)
    quantity = models.IntegerField()
    note = models.CharField(max_length=100)

    def __str__(self) -> str:
        return str(self.id + ' | ' + self.drugName)
