#modified

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Package
from .Packages import Packages
from .serializers import *
from django.db.models import Q
from rest_framework.decorators import action


@api_view(['GET'])
def getRoutes(request):
    routes =[
        '/api/Packages/',
        '/api/Packages/create/',
        '/api/Packages/upload/',
        '/api/Packages/<id>/reviews/',
        '/api/Packages/top/',
        '/api/Packages/<id>/',
        '/api/Packages/delete/<id>/',
        '/api/Packages/update/<id>/',
        '/api/Packages/search/<kw>/',


        '/api/Activities/',
        '/api/Activities/create/',
        '/api/Activities/upload/',
        '/api/Activities/<id>/reviews/',
        '/api/Activities/top/',
        '/api/Activities/<id>/',
        '/api/Activities/delete/<id>/',
        '/api/Activities/update/<id>/',

        '/api/Flights/',
        '/api/Flights/create/',
        '/api/Flights/upload/',
        '/api/Flights/<id>/reviews/',
        '/api/Flights/top/',
        '/api/Flights/<id>/',
        '/api/Flights/delete/<id>/',
        '/api/Flights/update/<id>/',

        '/api/Hotels/',
        '/api/Hotels/create/',
        '/api/Hotels/upload/',
        '/api/Hotels/<id>/reviews/',
        '/api/Hotels/top/',
        '/api/Hotels/<id>/',
        '/api/Hotels/delete/<id>/',
        '/api/Hotels/update/<id>/',

    ]
    return Response(routes)
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
def searchPackages(request, kw):
    queryset = Package.objects.all()
    if kw:
        queryset = queryset.filter(
            Q(name__icontains=kw) |
            Q(description__icontains=kw) 
        )

    serializer = PackageSerializer(queryset, many=True)
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


