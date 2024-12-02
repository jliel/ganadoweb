from django.db import models


class Ganado(models.Model):
    identificador = models.CharField(max_length=150, blank=False)
    fecha_registro = models.DateField(auto_now=True)
    corral = models.CharField(max_length=150, blank=False)

class Corral(models.Model):
    identificador = models.CharField(max_length=150, blank=False)
