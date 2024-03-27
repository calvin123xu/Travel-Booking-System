from django.contrib import admin
from .models import Package, Review, BookingDetail, BookingSummary, Activity, Flight, Hotel

admin.site.register(Package)
admin.site.register(Review)
admin.site.register(BookingDetail)
admin.site.register(BookingSummary)
admin.site.register(Activity)
admin.site.register(Flight)
admin.site.register(Hotel)
