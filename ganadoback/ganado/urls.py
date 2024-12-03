from django.urls import include, path
from .views import *


urlpatterns = [
    path('vacas/create/', GanadoCreate.as_view(), name='create-ganado'),
    path('vacas/', GanadoList.as_view()),
    path('vacas/<int:pk>/', GanadoDetail.as_view(), name='retrieve-ganado'),
    path('vacas/update/<int:pk>/', GanadoUpdate.as_view(), name='update-ganado'),
    path('vacas/delete/<int:pk>/', GanadoDelete.as_view(), name='delete-ganado'),

    path('corral/create/', CorralCreate.as_view(), name='create-corral'),
    path('corral/', CorralList.as_view()),
    path('corral/<int:pk>/', CorralDetail.as_view(), name='retrieve-corral'),
    path('corral/update/<int:pk>/', CorralUpdate.as_view(), name='update-corral'),
    path('corral/delete/<int:pk>/', CorralDelete.as_view(), name='delete-corral'),

    path('gasto/create/', GastoCreate.as_view(), name='create-gasto'),
    path('gasto/', GastoList.as_view()),
    path('gasto/<int:pk>/', GastoDetail.as_view(), name='retrieve-gasto'),
    path('gasto/update/<int:pk>/', GastoUpdate.as_view(), name='update-gasto'),
    path('gasto/delete/<int:pk>/', GastoDelete.as_view(), name='delete-gasto'),

    path('venta/create/', VentaCreate.as_view(), name='create-venta'),
    path('venta/', VentaList.as_view()),
    path('venta/<int:pk>/', VentaDetail.as_view(), name='retrieve-venta'),
    path('venta/update/<int:pk>/', VentaUpdate.as_view(), name='update-venta'),
    path('venta/delete/<int:pk>/', VentaDelete.as_view(), name='delete-venta'),

    path('enfermedad/create/', EnfermedadCreate.as_view(), name='create-enfermedad'),
    path('enfermedad/', EnfermedadList.as_view()),
    path('enfermedad/<int:pk>/', EnfermedadDetail.as_view(), name='retrieve-enfermedad'),
    path('enfermedad/update/<int:pk>/', EnfermedadUpdate.as_view(), name='update-enfermedad'),
    path('enfermedad/delete/<int:pk>/', EnfermedadDelete.as_view(), name='delete-enfermedad'),



]
