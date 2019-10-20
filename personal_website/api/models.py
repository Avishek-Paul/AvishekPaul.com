from django.db import models

# Create your models here.
class Contact(models.Model):
    created_on = models.TimeField(auto_now_add=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)