from django.urls  import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    path('Packages/', views.getPackages, name = "Packages"),
    path('Packages/<str:pk>', views.getPackage, name = "Package"),
    
]

