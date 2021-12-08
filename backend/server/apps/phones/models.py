from django.db import models

class Phone(models.Model):
    created_at = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=25)
    brand = models.CharField(max_length=25)
    os = models.CharField(max_length=25)
    description = models.TextField(null=True)
    color = models.CharField(max_length=25, null=True)
    screen = models.CharField(max_length=25, null=True)
    processor = models.CharField(max_length=25, null=True)
    ram = models.IntegerField(null=True)
    camera = models.IntegerField(null=True)
    price = models.IntegerField()
    offerPrice = models.IntegerField(null=True)
    hasOffer = models.BooleanField(default=False)
    image = models.ImageField(upload_to='phones/', null=True, max_length=255)
