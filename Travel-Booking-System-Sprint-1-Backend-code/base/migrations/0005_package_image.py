# Generated by Django 5.0.2 on 2024-02-28 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_rename_bookingdetails_bookingdetail_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='package',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
