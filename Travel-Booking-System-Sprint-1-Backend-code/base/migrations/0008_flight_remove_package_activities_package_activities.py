# Generated by Django 5.0.3 on 2024-03-15 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_activity_delete_activities'),
    ]

    operations = [
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flightNum', models.CharField(blank=True, max_length=200, null=True)),
                ('origin', models.CharField(blank=True, max_length=200, null=True)),
                ('destination', models.CharField(blank=True, max_length=200, null=True)),
                ('departureTime', models.DateTimeField()),
                ('arrivalTime', models.DateTimeField()),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
            ],
            options={
                'ordering': ['flightNum'],
            },
        ),
        migrations.RemoveField(
            model_name='package',
            name='activities',
        ),
        migrations.AddField(
            model_name='package',
            name='activities',
            field=models.ManyToManyField(related_name='packages', to='base.activity'),
        ),
    ]
