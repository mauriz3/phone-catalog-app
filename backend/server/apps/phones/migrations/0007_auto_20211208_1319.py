# Generated by Django 3.1.2 on 2021-12-08 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0006_auto_20211208_1318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='name',
            field=models.CharField(max_length=25),
        ),
    ]
