from django.db import models

class Flights(models.Model):
    flightNumber = models.CharField(max_length=100)
    startLocation = models.CharField(max_length=100)
    endLocation = models.CharField(max_length=100)
    date = models.DateField()

    class Meta:
        ordering = ['flightNumber']

    def __str__(self):
        return self.flightNumber