from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from base.models import Package, BookingSummary, BookingDetail, CheckoutAddress

from base.models import Activity
from base.models import Flight
from base.models import Hotel
from base.serializers import PackageSerializer, BookingDetailSerializer
from base.serializers import ActivitySerializer
from base.serializers import FlightSerializer
from base.serializers import HotelSerializer

from rest_framework import status
from datetime import datetime

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addBookingSummary(request):
    user = request.user
    data = request.data
    bookingSummary = data.get('bookingSummary', [])

    if not bookingSummary:
        return Response({'detail': 'No Items'}, status=status.HTTP_400_BAD_REQUEST)

    bookingDetail = BookingDetail.objects.create(
        user=user,
        paymentMethod=data.get('paymentMethod', ''),
        taxPrice=data.get('taxPrice', 0),
        totalPrice=data.get('totalPrice', 0),
    )

    checkout = CheckoutAddress.objects.create(
        bookingDetail=bookingDetail,
        address=data['checkoutAddress']['address'],
        city=data['checkoutAddress']['city'],
        postalCode=data['checkoutAddress']['postalCode'],
        country=data['checkoutAddress']['country']
    )

    for item in bookingSummary:
        package = Package.objects.get(id=item['package'])
        BookingSummary.objects.create(
            Package=package,
            BookingDetail=bookingDetail,  # Correcting the field names to exactly match those in the model
            name=package.name,
            qty=item.get('qty', 0),
            price=item.get('Price', 0.00),
            image=package.image.url if package.image else ''
    )

    serializer = BookingDetailSerializer(bookingDetail, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyBooking(request):
    user = request.user
    bookingDetail = user.bookingdetail_set.all() 
    serializer = BookingDetailSerializer(bookingDetail, many = True)   
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])   
def getBookingDetailById(request, pk):
    user = request.user
    try:
        bookingDetail = BookingDetail.objects.get(id=pk)
        if user.is_staff or bookingDetail.user == user:
            serializer = BookingDetailSerializer(bookingDetail, many=False)
            return Response(serializer.data)
        else:
            return Response({'detail': 'Not authorised to view this booking'}, status=status.HTTP_400_BAD_REQUEST)
    except BookingDetail.DoesNotExist:
        return Response({'detail': 'Booking does not exist'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateBookingToPaid(request, pk):
    bookingDetail = BookingDetail.objects.get(id=pk)    
    bookingDetail.isPaid = True
    bookingDetail.paidAt = datetime.now()   
    bookingDetail.save()

    serializer = BookingDetailSerializer(bookingDetail, many=False)
    return Response(serializer.data)
