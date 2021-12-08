from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from apps.phones.views import PhoneViewSet

router = DefaultRouter()
router.register("phones", PhoneViewSet, basename="phones")
phones_urlpatterns = [url("api/v1/", include(router.urls))]
