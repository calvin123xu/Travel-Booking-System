from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Package
from .models import Activity
from .models import Flight
from .models import Hotel
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
      name = serializers.SerializerMethodField(read_only=True)
      _id = serializers.SerializerMethodField(read_only=True)
      isAdmin = serializers.SerializerMethodField(read_only=True)


      class Meta:
        model =  User
        fields = ['id','_id','username', 'email', 'name', 'isAdmin']

      def get__id(self,obj):
           return obj.id 

      def get_isAdmin(self,obj):
           return obj.is_staff        

      def get_name(self,obj):
           name =  obj.first_name
           if name == '':
             name = obj.email
           return name    


class UserSerializerWithToken(UserSerializer):
     token = serializers.SerializerMethodField(read_only=True)
     class Meta:
       model = User
       fields = ['id','_id','username', 'email', 'name', 'isAdmin', 'token']

     def get_token(self,obj):
         token= RefreshToken.for_user(obj)
         return str(token.access_token)  



class PackageSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Package
        fields ='__all__'        

class ActivitySerializer(serializers.ModelSerializer):
      class Meta:
        model =  Activity
        fields ='__all__'

class FlightSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Flight
        fields ='__all__'

class HotelSerializer(serializers.ModelSerializer):
      class Meta:
        model =  Hotel
        fields ='__all__'