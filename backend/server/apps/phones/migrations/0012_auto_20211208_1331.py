# Generated by Django 3.1.2 on 2021-12-08 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0011_auto_20211208_1328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='color',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='os',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='processor',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='screen',
            field=models.CharField(max_length=25, null=True),
        ),
    ]
