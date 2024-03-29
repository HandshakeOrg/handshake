"""
This module houses all the routes handles for our API
"""
from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api')

from server.views.listing import *
from server.views.signup import *
from server.views.login import *
from server.views.logout import *
from server.views.listing_search import *
from server.views.settings import *
from server.views.dashboard import *
