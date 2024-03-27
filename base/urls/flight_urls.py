from django.urls  import path
from base.views import package_views as views

urlpatterns = [

    path('', views.getFlights, name = "Flights"),
    path('<str:pk>', views.getFlight, name = "Flight"),

    

    
]
