# Generated by Django 3.1.2 on 2021-12-08 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0012_auto_20211208_1331'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='os',
            field=models.CharField(default='', max_length=25),
            preserve_default=False,
        ),
    ]
