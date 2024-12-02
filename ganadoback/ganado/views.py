from django.shortcuts import render
from .models import Ganado, Corral
from rest_framework import generics
from .serializers import GanadoSerializer, CorralSerializer


class GanadoCreate(generics.CreateAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer

class GanadoList(generics.ListAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer

class GanadoDetail(generics.RetrieveAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer

class GanadoUpdate(generics.RetrieveUpdateAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer

class GanadoDelete(generics.RetrieveDestroyAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer


#Corrales
class CorralCreate(generics.CreateAPIView):
    queryset = Corral.objects.all()
    serializer_class = CorralSerializer

class CorralList(generics.ListAPIView):
    queryset = Corral.objects.all()
    serializer_class = CorralSerializer

class CorralDetail(generics.RetrieveAPIView):
    queryset = Corral.objects.all()
    serializer_class = CorralSerializer

class CorralUpdate(generics.RetrieveUpdateAPIView):
    queryset = Corral.objects.all()
    serializer_class = CorralSerializer

class CorralDelete(generics.RetrieveDestroyAPIView):
    queryset = Corral.objects.all()
    serializer_class = CorralSerializer