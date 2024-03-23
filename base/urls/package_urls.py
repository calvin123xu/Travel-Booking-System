from django.urls  import path
from base.views import package_views as views

   

urlpatterns = [

    path('', views.getPackages, name = "Packages"),
    path('<str:pk>', views.getPackage, name = "Package"),
    
]

