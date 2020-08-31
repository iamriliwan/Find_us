from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=120),
    email = models.EmailField(max_length=120),
    address = models.TextField(),
    city = models.CharField(max_length=100),
    phone = models.CharField(max_length=20)


    def __str__(self):
        return self.name


# from django.contrib.auth.models import AbstractUser
# from django.contrib.auth.models import AbstractBaseUser
# from django.contrib.auth.models import PermissionsMixin
# from django.utils.translation import ugettext_lazy as _

# # from .managers import CustomUserManager

# position_choices = (
# 	('Accountant', 'Accountant'),
# 	('Staff', 'Staff'),
# 	('HR', 'HR'),
# 	('CEO', 'CEO'),
# 	('Admin', 'Admin'),
# 	('Manager', 'Manager'),
# )


# class Employee(models.Model):
# 	name = models.CharField(_("Employee Full Name"), max_length=100, default='')
# 	email = models.EmailField(_('Employee Email Address'), unique=True, default='')
# 	address = models.TextField(_("Employee Address"), default='')
# 	city = models.CharField(_("Employee City"), max_length=100, default='')
# 	state = models.CharField(_("Employee State"), max_length=50, default='')
# 	mobile = models.CharField(_("Employee Mobile Number"), max_length=20, default='', unique=True)
# 	organization = models.ForeignKey('Company', on_delete=models.CASCADE, default=None)
# 	position = models.CharField(_('Employee Position'), max_length=100, default='', choices=position_choices)

# 	def __str__(self):
# 		return self.name


# class Company(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(_('email address'), unique=True, default='')
#     name = models.CharField(_("Company Name"), max_length=100, default='', unique=True)
#     address = models.TextField(_("Company Address"), default='', blank=True)
#     city = models.CharField(_("City"), max_length=100, default='', blank=True)
#     state = models.CharField(_("State"), max_length=50, default='', blank=True)
#     mobile = models.CharField(_("Mobile Number"), max_length=20, default='', blank=True, unique=True)
#     is_staff = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=True)
#     date_joined = models.DateTimeField(auto_now_add=True)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []

#     # objects = CustomUserManager()

#     def __str__(self):
#         return self.name