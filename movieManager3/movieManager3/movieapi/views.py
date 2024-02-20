from .models import Flights, Packages, Hotels, Activities
from .seriallizers import FlightsSerializer, PackagesSerializer, HotelsSerializer, ActivitiesSerializer
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q



class ActivitiesViewSet(viewsets.ModelViewSet):
    queryset = Activities.objects.all()
    serializer_class = ActivitiesSerializer
    permission_classes = [permissions.IsAuthenticated]
    #search a movie by title
    @action(detail=False, methods=['GET'])
    def search(self, request):
        queryset = Activities.objects.all()
        search_param = self.request.query_params.get('search', None) #retrive the search-parameter from the http request
        if search_param:
            queryset = queryset.filter(
                Q(name__icontains=search_param) |
                Q(description__icontains=search_param) |
                Q(startTime__icontains=search_param) |
                Q(endTime__icontains=search_param)
            )

        serializer = ActivitiesSerializer(queryset, many=True)
        return Response(serializer.data)

#ModelViewSet provideS CRUD operations by defaut
class FlightsViewSet(viewsets.ModelViewSet):
    queryset = Flights.objects.all()
    serializer_class = FlightsSerializer
    permission_classes = [permissions.IsAuthenticated]
    #search a movie by title
    @action(detail=False, methods=['GET'])
    def search(self, request):
        queryset = Flights.objects.all()
        search_param = self.request.query_params.get('search', None) #retrive the search-parameter from the http request
        if search_param:
            queryset = queryset.filter(
                Q(flightsNum__icontains=search_param) |
                Q(origin__icontains=search_param) |
                Q(destination__icontains=search_param) |
                Q(departureTime__icontains=search_param) |
                Q(arrivalTime__icontains=search_param)
            )

        serializer = FlightsSerializer(queryset, many=True)
        return Response(serializer.data)

class HotelsViewSet(viewsets.ModelViewSet):
    queryset = Hotels.objects.all()
    serializer_class = HotelsSerializer
    permission_classes = [permissions.IsAuthenticated]

    # search a magazine by title
    @action(detail=False, methods=['GET'])
    def search(self, request):
        queryset = Hotels.objects.all()
        search_param = self.request.query_params.get('search', None)

        if search_param:
            queryset = queryset.filter(
                Q(name_icontains=search_param) |
                Q(OpeningDate__icontains=search_param) |
                Q(information__icontains=search_param)
            )

        serializer = HotelsSerializer(queryset, many=True)
        return Response(serializer.data)


class PackagesViewSet(viewsets.ModelViewSet):
    queryset = Packages.objects.all()
    serializer_class = PackagesSerializer
    permission_classes = [permissions.IsAuthenticated]
    # search a book by title
    @action(detail=False, methods=['GET'])
    def search(self, request):
        queryset = Packages.objects.all()
        search_param = self.request.query_params.get('search',
                                                     None)  # retrive the search-parameter from the http request
        if search_param:
            queryset = queryset.filter(
                Q(title_icontains=search_param) |
                Q(releaseDate__icontains=search_param) |
                Q(summary__icontains=search_param) |
                Q(flights_icontains=search_param) |
                Q(hotels_icontains=search_param) |
                Q(activities_icontains=search_param)
            )

        serializer = PackagesSerializer(queryset, many=True)
        return Response(serializer.data)






