from django.db import models
from django.db.models import Sum

# activity and price

class Activities(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(help_text="shortdescription")
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    price = models.FloatField(default=0.0)
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Flights(models.Model):
    flightsNum = models.CharField(max_length=150)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departureTime = models.DateTimeField()
    arrivalTime = models.DateTimeField()
    price = models.FloatField(default=0.0)
    class Meta:
        ordering = ['flightsNum']

    def __str__(self):
        return self.flightsNum

class Hotels(models.Model):
    name = models.CharField(max_length=150)
    OpeningDate = models.DateTimeField()
    image = models.URLField(help_text="froomgoogle")
    information = models.TextField(help_text="shortdescription")
    price = models.FloatField(default=0.0)

    class Meta:
        ordering = ['name']
    def __str__(self):
        return self.name

#
class Packages(models.Model):
    title = models.CharField(max_length=150)
    releaseDate = models.DateTimeField()
    image = models.URLField(help_text="goodreads")
    summary = models.TextField(help_text="shortdescription")
    flights = models.ManyToManyField(Flights, related_name='packages')
    hotels = models.ManyToManyField(Hotels, related_name='packages')
    activities = models.ManyToManyField(Activities, related_name='packages')
    type = models.BooleanField(default=False,help_text="false = premade, true = custom") #false = premade, true = custom
    price = models.FloatField(default=0.0)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title

    def updateTotalPrice(self):
        totalFlightPrice = self.flights.aggregate(total=Sum('price'))['total'] or 0.0
        totalHotelPrice = self.hotels.aggregate(total=Sum('price'))['total'] or 0.0
        totalActivitiesPrice = self.activities.aggregate(total=Sum('price'))['total'] or 0.0

        self.price = totalFlightPrice + totalHotelPrice + totalActivitiesPrice
        self.save(update_fields=['price'])

        return totalActivitiesPrice




