from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('scanned/', include('history.api.urls')),
    path('scanner/', include('scanner.api.urls')),
]
