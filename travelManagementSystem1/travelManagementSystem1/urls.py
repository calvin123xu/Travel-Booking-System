from django.contrib import admin
from django.urls import path, include
from travelManagementSystem1.FlightsAPI import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('Flights', views.FlightsViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [path('', include(router.urls)),path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))]
urlpatterns += router.urls
