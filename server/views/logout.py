#!/usr/bin/python3
"""
Logs out a current_user
returns status 200 if success
"""


from flask import jsonify
from flask_login import logout_user
from server.views import app_views
from server import login_manager
from server.models import User


@login_manager.user_loader
def load_user(user_id):
    """
    wrapper function
    loads a user from the database by the user_id
    """
    return User.query.get(int(user_id))


@app_views.route('/logout', methods=['GET'], strict_slashes=False)
def logout():
    """
    Logs out a current user
    """
    logout_user()
    return jsonify({}), 200
