from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer

class ContactView(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer