from django.http import JsonResponse
from scanner.models import PrescriptionDtoGenerator, DrugPrescriptionGenerator

def Scanning(request):
    fakeDrugPrescription1 = DrugPrescriptionGenerator(drugName='drugDummy1', quantity=1, note='noteDummy1').convertToDict()
    fakeDrugPrescription2 = DrugPrescriptionGenerator(drugName='drugDummy2', quantity=2, note='noteDummy2').convertToDict()
    fakeDrugPrescription3 = DrugPrescriptionGenerator(drugName='drugDummy3', quantity=3, note='noteDummy3').convertToDict()
    fakeDrugPrescription4 = DrugPrescriptionGenerator(drugName='drugDummy4', quantity=4, note='noteDummy4').convertToDict()
    prescriptionGenerator = PrescriptionDtoGenerator(note = 'faking note', image='https://res.cloudinary.com/dscc9chrk/image/upload/v1667054062/architecture.jpg', drugs = [fakeDrugPrescription1, fakeDrugPrescription2, fakeDrugPrescription3, fakeDrugPrescription4])
    return JsonResponse(prescriptionGenerator.convertToDict())