from rest_framework import viewsets
from apps.phones.models import Phone
from apps.phones.serializers import PhoneSerializer
from django_filters import rest_framework as filters


class PhoneFilter(filters.FilterSet):
    brand = filters.CharFilter(lookup_expr='icontains')
    os = filters.CharFilter(lookup_expr='icontains')
    hasOffer = filters.BooleanFilter()


class PhoneViewSet(viewsets.ModelViewSet):

    serializer_class = PhoneSerializer
    queryset = Phone.objects.all().order_by('id')
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = PhoneFilter
    authentication_classes = [] #disables authentication
    permission_classes = [] #disables permission

    def get_queryset(self):
        return self.queryset
