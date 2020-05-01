from django.shortcuts import render
from first_app.models import Department, Employee


# Create your views here.

def index(request):
    employee_list = Employee.objects.order_by('emp_id')
    emp_dict = {'emp': employee_list}
    return render(request, 'first_app/index.html', context=emp_dict)


def department_view(self):
    department_list = Department.objects.order_by('dept_id')
    dept_dict = {'dept': department_list}
    return render(self, 'first_app/department.html', context=dept_dict)
