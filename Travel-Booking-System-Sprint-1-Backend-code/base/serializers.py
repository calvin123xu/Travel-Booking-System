#modified

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class PackageSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Package
        fields ='__all__'

class ActivitySerializer(serializers.ModelSerializer):
      class Meta:
        model =  Activity
        fields ='__all__'

class FlightSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Flight
        fields ='__all__'

class HotelSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Hotel
        fields ='__all__'