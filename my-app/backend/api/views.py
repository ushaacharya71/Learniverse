from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer


# ViewSet gives you GET, POST, PUT, DELETE automatically
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
