# Generated by Django 3.1.2 on 2021-12-08 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0007_auto_20211208_1319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='brand',
            field=models.CharField(max_length=25),
        ),
    ]
