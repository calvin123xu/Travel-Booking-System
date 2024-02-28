from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Package
from .Packages import Packages
from .serializers import PackageSerializer


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

    

