#!/usr/bin/python3
"""
Account settings
update contact information and password
"""


from server import db, bcrypt
from server.models.user import User
from server.views import app_views
from flask import jsonify, request
from flask_login import current_user, login_required


def validate_email(email):
    """
    checks if the email is already registered in the database
    """
    if email != current_user.email:
        user = User.query.filter_by(email=email).first()
        if user:
            return True
        return False

def validate_phone(phone_number):
    """
    checks if the phone number is already registered in the database
    """
    if phone != current_user.phone_number:
        user = User.query.filter_by(phone_number = phone)
        if user:
            return True
        return False


@login_required
@app_views.route('/settings', methods=['GET'], strict_slashes=False)
def load_settings():
    """
    loads up the settings page
    with the current_user data
    """
    return jsonify ({'current_user': current_user}), 200


@login_required
@app_views.route('/settings/changepass', methods=['POST'], strict_slashes=False)
def change_password():
    """
    change a user's password
    """
    password = request.form.get('password')
    if not password:
        return jsonify({'error': 'You did not enter a password'}), 400
    hashed_pwd = bcrypt.generate_password_hash(password)
    current_user.password = password
    db.session.commit()
    return jsonify('success': 'Your password has been changed'}), 200


@login_required
@app_views.route('/settings/changeemail', methods=['POST'], strict_slashes=False)
def update_email():
    """
    change/update a user email address
    """
    email = request.form.get('email')
    if not email:
        return jsonify({'error': 'Please provide an email address'}), 400
    check_email = validate_email(email)
    if !check_email:
        current_user.email = email
        db.session.commit()
        return jsonify('success': 'Your email has been updated'}), 200
    else:
        return jsonify({'error': 'Email has already been taken'}), 400


@login_required
@app_views.route('/settings/changephone', methods=['POST'], strict_slashes=False)
def update_phone():
    """
    change/update a user phone number
    """
    phone = request.form.get('phone_number')
    if not phone:
        return jsonify({'error': 'Please provide a valid phone number'}), 400
    check_phone = validate_phone(phone)
    if !check_phone:
        current_user.phone_numer = phone
        db.session.commit()
        return jsonify('success': 'Your phone number has been updated'}), 200
    else:
        return jsonify({'error': 'This phone number has already been registered by another user'})


@login_required
@app_views.route('/settings/delete', methods=['DELETE'], strict_slashes=False)
def delete_account():
    """
    deletes a user account
    """
    user = User.query.get(current_user.id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'You account has been deleted.'}), 200

