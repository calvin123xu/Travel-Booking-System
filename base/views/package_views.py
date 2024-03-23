from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from base.models import Package
from base.Packages import Packages
from base.serializers import PackageSerializer

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
