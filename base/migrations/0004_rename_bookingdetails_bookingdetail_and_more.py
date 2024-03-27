# Generated by Django 5.0.2 on 2024-02-28 05:56

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_bookingdetails_bookingsummary'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BookingDetails',
            new_name='BookingDetail',
        ),
        migrations.RenameField(
            model_name='bookingsummary',
            old_name='BookingDetails',
            new_name='BookingDetail',
        ),
    ]