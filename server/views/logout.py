#!/usr/bin/python3
"""
Logs out a current_user
returns status 200 if success
"""


from flask import jsonify
from flask_login import logout_user, current_user
from server.views import app_views


@app_views.route('/logout', methods=['GET'], strict_slashes=False)
def logout():
    """
    Logs out a current user
    """
    logout_user()
    return jsonify({}), 200
