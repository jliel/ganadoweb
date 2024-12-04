from django.db import models


class Ganado(models.Model):
    identificador = models.CharField(max_length=150, blank=False)
    fecha_registro = models.DateField(auto_now=True)
    corral = models.CharField(max_length=150, blank=False)

class Personal(models.Model):
    nombre = models.CharField(max_length=150, blank=False)
    fecha_registro = models.DateField(auto_now=True)
    corral = models.CharField(max_length=150, blank=False)

class Corral(models.Model):
    identificador = models.CharField(max_length=150, blank=False)

class Gasto(models.Model):
    cantidad = models.CharField(max_length=150, blank=False)
    fecha_registro = models.DateField(auto_now=True)
    id_personal = models.CharField(max_length=150, blank=False)

class Venta(models.Model):
    cantidad = models.CharField(max_length=150, blank=False)
    fecha_registro = models.DateField(auto_now=True)
    id_personal = models.CharField(max_length=150, blank=False)

class Enfermedad(models.Model):
    descripcion = models.CharField(max_length=150, blank=False)
    fecha_registro = models.DateField(auto_now=True)
    id_ganado = models.CharField(max_length=150, blank=False)
