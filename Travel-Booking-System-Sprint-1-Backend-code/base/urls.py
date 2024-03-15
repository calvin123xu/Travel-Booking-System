#modified

from django.urls  import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    path('Packages/', views.getPackages, name = "Packages"),
    path('Packages/<str:pk>', views.getPackage, name = "Package"),
    path('Packages/search/<str:kw>', views.searchPackages, name = "searchPackages"),
    path('Activities/', views.getActivities, name = "Activities"),
    path('Activities/<str:pk>', views.getActivity, name = "Activity"),
    path('Flights/', views.getFlights, name = "Flights"),
    path('Flights/<str:pk>', views.getFlight, name = "Flight"),
    path('Hotels/', views.getHotels, name = "Hotels"),
    path('Hotels/<str:pk>', views.getHotel, name = "Hotel"),
    
]

