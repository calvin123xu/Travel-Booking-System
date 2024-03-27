from django.urls  import path
from base.views import package_views as views

urlpatterns = [

    path('', views.getHotels, name = "Hotels"),
    path('<str:pk>', views.getHotel, name = "Hotel"),
    

    
]