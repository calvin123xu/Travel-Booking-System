from rest_framework import serializers
from travelManagementSystem1.FlightsAPI.models import Flights

class FlightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flights
        fields = ['_all_']