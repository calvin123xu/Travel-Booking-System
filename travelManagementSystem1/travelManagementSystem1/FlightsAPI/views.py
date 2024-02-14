from rest_framework import viewsets
from travelManagementSystem1.FlightsAPI.models import Flights
from travelManagementSystem1.FlightsAPI.serializers import FlightsSerializer

class FlightsViewSet(viewsets.ModelViewSet):
    queryset = Flights.objects.all()
    serializer_class = FlightsSerializer