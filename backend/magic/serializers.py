from rest_framework import serializers
from magic.models import Passage
from django.contrib.auth.models import User


class PassageSerializer(serializers.ModelSerializer):


    class Meta:
        model = Passage
        fields = ['id','title','author', 'source', 'text']



