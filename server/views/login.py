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
    if current_user.is_authenticated:
        return jsonify({'success': 'User is logged in alreardy'}), 200

    email = request.form.get('email')
    password = request.form.get('password')
    if not email:
        return jsonify({'error': 'Please enter your email!'}), 400
    if not password:
        return jsonify({'error': 'Please enter your password'}), 400
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        return jsonify({
            'current_user': {
            'id': current_user.id,
            'firstname': current_user.firstname,
            'lastname': current_user.lastname,
            'email': current_user.email,
            'phone_number': current_user.phone_number,
            'city_id': current_user.city_id
            }
        }), 200
    else:
            return jsonify({'error': 'Login unsuccessful, please check email or password'}), 400
