from django.urls import path
from magic import views
from rest_framework.urlpatterns import format_suffix_patterns



urlpatterns = [
    path('passages/', views.PassageList.as_view()),
    path('passages/<int:pk>/', views.PassageDetail.as_view()),
    # path('users/', views.UserList.as_view()),
    # path('users/<int:pk>/', views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
