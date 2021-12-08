from rest_framework import serializers
from apps.phones.models import Phone


class PhoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Phone
        read_only_fields = (
            "id",
            "created_at"
        )
        fields = (
            "id",
            "created_at",
            "name",
            "brand",
            "os",
            "description",
            "color",
            "screen",
            "processor",
            "camera",
            "price",
            "offerPrice",
            "hasOffer",
            "image",
        )

    #This function returns media images
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)
