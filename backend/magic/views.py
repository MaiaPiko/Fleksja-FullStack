from magic.models import Passage
from magic.serializers import PassageSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from magic.serializers import UserSerializer
from rest_framework import permissions
from magic.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

class PassageList(generics.ListCreateAPIView):
    queryset = Passage.objects.all()
    serializer_class = PassageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PassageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Passage.objects.all()
    serializer_class = PassageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'passages': reverse('passages-list', request=request, format=format)
    })