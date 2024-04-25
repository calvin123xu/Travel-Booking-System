from django.urls  import path
from base.views import order_views as views

   

urlpatterns = [
            
            path('add/',views.addBookingSummary, name='booking-add'),
            path('mybookings/',views.getMyBooking, name='mybookings'),



            path('<str:pk>/',views.getBookingDetailById, name='user-booking'),
            path('<str:pk>/pay/',views.updateBookingToPaid, name='pay'),

    
]

