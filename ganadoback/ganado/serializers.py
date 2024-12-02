from rest_framework import serializers
from .models import Ganado, Corral

class GanadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ganado
        fields = ['id', 'identificador', 'fecha_registro', 'corral']

class CorralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corral
        fields = ['id', 'identificador']