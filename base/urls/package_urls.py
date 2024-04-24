from django.urls  import path
from base.views import package_views as views


   

urlpatterns = [

    path('', views.getPackages, name = "Packages"),

    path('create/', views.createPackage, name = "Package-create"),
    path('<str:pk>', views.getPackage, name = "Package"),

    path('update/<str:pk>', views.updatePackage, name = "Package-update"),
    path('delete/<str:pk>', views.deletePackage, name = "Package-delete"),

    

    
]

