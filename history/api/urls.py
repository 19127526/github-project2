from django.urls import path
from history.api.views import PrescriptionDetail, PrescriptionList

urlpatterns = [
    path('prescription/list', PrescriptionList.as_view(), name='DrugPrescriptionList'),
    path('prescription/<int:pk>', PrescriptionDetail.as_view(), name='DrugPrescriptionList'),
]
