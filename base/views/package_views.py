from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from base.models import Package

from base.models import Activity
from base.models import Flight
from base.models import Hotel
from base.serializers import PackageSerializer
from base.serializers import ActivitySerializer
from base.serializers import FlightSerializer
from base.serializers import HotelSerializer

from rest_framework import status

@api_view(['GET'])
def getPackages(request):
    Packages = Package.objects.all()
    serializer = PackageSerializer(Packages, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPackage(request,pk):
    package = Package.objects.get(id=pk)
    serializer = PackageSerializer(package, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getActivities(request):
    activities = Activity.objects.all()
    serializer = ActivitySerializer(activities, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getActivity(request,pk):
    activity = Activity.objects.get(id=pk)
    serializer = ActivitySerializer(activity, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getFlights(request):
    flights = Flight.objects.all()
    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFlight(request,pk):
    flight = FlightSerializer.objects.get(id=pk)
    serializer = FlightSerializer(flight, many=False)
    return Response(serializer.data)    

@api_view(['GET'])
def getHotels(request):
    hotels = Hotel.objects.all()
    serializer = HotelSerializer(hotels, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getHotel(request,pk):
    hotel = HotelSerializer.objects.get(id=pk)
    serializer = HotelSerializer(hotel, many=False)
    return Response(serializer.data) 