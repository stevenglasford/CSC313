from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    #return HttpResponse("<strong><em>Hello World</em></strong>")
    return render(request, 'first_app/index.html')
