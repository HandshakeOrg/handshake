#!/usr/bin/python3
"""
Logs in user
return current_user and status 200 if success
otherwise returns error
"""

from flask import request, jsonify, abort
from server import db, bcrypt
from server.models import User
from server.views import app_views
from flask_login import login_user, current_user


@app_views.route('/login', methods=['POST'], strict_slashes=False)
def login():
    """
    Log in a user
    """
    email = request.form.get('email')
    password = request.form.get('password')

    if current_user.is_authenticated:
        return jsonify({'success': 'User is already logged in'})
    if not email:
        return jsonify({'error': 'Please enter your email!'}), 400
    if not password:
        return jsonify({'error': 'Please enter your password'}), 400
    try:
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            return jsonify({'current_user': current_user}), 200
        else:
            return jsonify({'error': 'Login unsuccessful, \
                            please check email or password'}), 400

    except Exception as error:
        abort(401)
