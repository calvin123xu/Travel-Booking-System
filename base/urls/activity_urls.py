from django.urls  import path
from base.views import package_views as views

urlpatterns = [

    
    path('', views.getActivities, name = "Activities"),
    path('<str:pk>', views.getActivity, name = "Activity"),

    
]