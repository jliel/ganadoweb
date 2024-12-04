from rest_framework import serializers
from .models import Ganado, Corral, Personal, Gasto, Venta, Enfermedad

class GanadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ganado
        fields = ['id', 'identificador', 'fecha_registro', 'corral']

class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal
        fields = ['id', 'nombre', 'fecha_registro', 'corral']

class CorralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corral
        fields = ['id', 'identificador']

class GastoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gasto
        fields = ['id', 'cantidad', 'fecha_registro', 'id_personal']

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ['id', 'cantidad', 'fecha_registro', 'id_personal']

class EnfermedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enfermedad
        fields = ['id', 'descripcion', 'fecha_registro', 'id_ganado']