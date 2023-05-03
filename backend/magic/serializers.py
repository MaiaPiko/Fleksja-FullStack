from rest_framework import serializers
from magic.models import Passage
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    passages = serializers.PrimaryKeyRelatedField(many=True, queryset=Passage.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'passages']

class PassageSerializer(serializers.ModelSerializer):


    class Meta:
        model = Passage
        fields = ['id','title','author', 'source', 'text']



