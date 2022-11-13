from django.db import models

# Create your models here.

class DrugPrescriptionGenerator():
    def __init__(self, **kwargs):
        self.drugName = kwargs['drugName']
        self.quantity = kwargs['quantity']
        self.note = kwargs['note']
    def convertToDict(self):
        return {
            'drugName': self.drugName,
            'quantity': self.quantity,
            'note': self.note
        }

class PrescriptionDtoGenerator():
    def __init__(self, note=None, image=None, drugs=list()):
        self.date = datetime.datetime.now()
        self.note = note
        self.image = image
        self.drugs = drugs

    def convertToDict(self):
        return {
            'note': self.note,
            'image': self.image,
            'date': self.date,
            'drugs': self.drugs,
        }
