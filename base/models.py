from django.db import models
from django.contrib.auth.models import User

class Package(models.Model):
   user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
   name =  models.CharField(max_length=200, null=True, blank=True)
   image = models.ImageField(null=True, blank=True, default='/placeholder.png')
   description = models.TextField(null=True, blank=True)
   besttimetovisit = models.CharField(max_length=200, null=True, blank=True)
   flightdetails = models.CharField(max_length=200, null=True, blank=True)
   flightduration = models.CharField(max_length=200, null=True, blank=True)
   activities = models.TextField(null=True, blank=True)
   Hotel = models.CharField(max_length=200, null=True, blank=True)
   Price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
   rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
   numReviews = models.IntegerField(null=True, blank=True, default=0)
   id = models.AutoField(primary_key=True, editable=False)

   def  __str__(self):
    return self.name

class Review(models.Model):
     Package = models.ForeignKey(Package, on_delete=models.SET_NULL, null=True)
     user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
     name = models.CharField(max_length=200, null=True, blank=True)
     rating = models.IntegerField(null=True, blank=True, default=0)
     comment = models.TextField(null=True, blank=True)
     id = models.AutoField(primary_key=True, editable=False)
    
     def   __str__(self):
        return str(self.rating)

class BookingDetail(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)
    def  __str__(self):
        return str(self.createdAt)

class BookingSummary(models.Model):
    Package = models.ForeignKey(Package, on_delete=models.SET_NULL, null=True)
    BookingDetail = models.ForeignKey(BookingDetail, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    id = models.AutoField(primary_key=True, editable=False)
    def  __str__(self):
        return str(self.name)

class CheckoutAddress(models.Model):
    bookingDetail = models.OneToOneField(BookingDetail, on_delete=models.CASCADE, null = True, blank = True)
    address = models.CharField(max_length=200, null = True, blank = True)
    city = models.CharField(max_length=100, null = True, blank = True)
    postalCode = models.CharField(max_length=50, null = True, blank = True)
    country = models.CharField(max_length=100, null = True, blank = True)
    id = models.AutoField(primary_key=True, editable=False)
    def  __str__(self):
        return str(self.address)

class Activity(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    id = models.AutoField(primary_key=True, editable=False)
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Flight(models.Model):
    flightNum = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    origin = models.CharField(max_length=200, null=True, blank=True)
    destination = models.CharField(max_length=200, null=True, blank=True)
    departure = models.DateTimeField()
    arrival = models.DateTimeField()
    duration = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    id = models.AutoField(primary_key=True, editable=False)
    class Meta:
        ordering = ['flightNum']

    def __str__(self):
        return self.flightNum 

class Hotel(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(help_text="shortdescription")
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    room = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        ordering = ['name']
    def __str__(self):
        return self.name
    
