# Generated by Django 3.1.2 on 2021-12-08 13:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0008_auto_20211208_1319'),
    ]

    operations = [
        migrations.RenameField(
            model_name='phone',
            old_name='hasOffer',
            new_name='hasOffer',
        ),
    ]
