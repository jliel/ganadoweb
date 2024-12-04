from django.shortcuts import render
from .models import Ganado, Corral, Personal, Gasto, Venta, Enfermedad
from rest_framework import generics
from .serializers import GanadoSerializer, CorralSerializer, PersonalSerializer, GastoSerializer, VentaSerializer, EnfermedadSerializer


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


# Corrales
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

# Personal


class PersonalCreate(generics.CreateAPIView):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer


class PersonalList(generics.ListAPIView):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer


class PersonalDetail(generics.RetrieveAPIView):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer


class PersonalUpdate(generics.RetrieveUpdateAPIView):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer


class PersonalDelete(generics.RetrieveDestroyAPIView):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer

# gasto


class GastoCreate(generics.CreateAPIView):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer


class GastoList(generics.ListAPIView):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer


class GastoDetail(generics.RetrieveAPIView):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer


class GastoUpdate(generics.RetrieveUpdateAPIView):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer


class GastoDelete(generics.RetrieveDestroyAPIView):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer

# venta


class VentaCreate(generics.CreateAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class VentaList(generics.ListAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class VentaDetail(generics.RetrieveAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class VentaUpdate(generics.RetrieveUpdateAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class VentaDelete(generics.RetrieveDestroyAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

# enfermedad


class EnfermedadCreate(generics.CreateAPIView):
    queryset = Enfermedad.objects.all()
    serializer_class = EnfermedadSerializer


class EnfermedadList(generics.ListAPIView):
    queryset = Enfermedad.objects.all()
    serializer_class = EnfermedadSerializer


class EnfermedadDetail(generics.RetrieveAPIView):
    queryset = Enfermedad.objects.all()
    serializer_class = EnfermedadSerializer


class EnfermedadUpdate(generics.RetrieveUpdateAPIView):
    queryset = Enfermedad.objects.all()
    serializer_class = EnfermedadSerializer


class EnfermedadDelete(generics.RetrieveDestroyAPIView):
    queryset = Enfermedad.objects.all()
    serializer_class = EnfermedadSerializer
