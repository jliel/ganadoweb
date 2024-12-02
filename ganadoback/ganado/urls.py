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



]
