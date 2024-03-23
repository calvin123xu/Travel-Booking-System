from django.contrib import admin
from .models import Package, Review, BookingDetail, BookingSummary

admin.site.register(Package)
admin.site.register(Review)
admin.site.register(BookingDetail)
admin.site.register(BookingSummary)

