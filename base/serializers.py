from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Package

class PackageSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Package
        fields ='__all__'