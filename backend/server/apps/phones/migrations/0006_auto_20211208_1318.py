# Generated by Django 3.1.2 on 2021-12-08 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0005_auto_20211208_1307'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='camera',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='offerPrice',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='price',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='ram',
            field=models.IntegerField(null=True),
        ),
    ]
