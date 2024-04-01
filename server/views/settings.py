#!/usr/bin/python3
"""
Account settings
update contact information and password
"""

from flask import jsonify, request
from flask_login import login_required, current_user
from server import db, bcrypt
from server.views import app_views
from server.models.user import User
from server.models.city import City
from server.models.state import State
from server.models.country import Country


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
    if phone_number != current_user.phone_number:
        user = User.query.filter_by(phone_number=phone_number).first()
        if user:
            return True
        return False


@app_views.route('/settings', methods=['GET'], strict_slashes=False)
@login_required
def load_settings():
    """
    loads up the settings page
    with the current_user data
    """
    if current_user.is_authenticated:
        return jsonify ({
            'current_user': {
            'id': current_user.id,
            'firstname': current_user.firstname,
            'lastname': current_user.lastname,
            'email': current_user.email,
            'city': current_user.city.name if current_user.city else None,
            'state': current_user.state.name if current_user.state else None,
            }
        }), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401


@app_views.route('/settings/changelocaton', methods=['POST'], strict_slashes=False)
@login_required
def change_location():
    """
    change the location of a user
    """
    city_name = request.form.get('city')
    if not city:
        return jsonify({'error': 'Please enter a city'}), 400
    state_name = request.form.get('state')
    if not state:
        return jsonify({'error': 'Please enter a valid state'}), 400
    country_name = request.form.get('country')
    if not country:
        return jsonify({'error', 'Please choose a country'}), 400

    city = City.query.filter_by(name=city_name).first()
    if not city:
        return jsonify({'error': 'The city entered does not exist'}), 400

    state = State.query.filter_by(name=state_name).first()
    if not state:
        return jsonify({'error': 'The state entered does not exist'}), 400

    country = Country.query.filter_by(name=country_name).first()
    if not country:
        return jsonify({'error': 'The country entered does not exist'}), 400
 
    current_user.state_id = state.id
    db.session.commit()
    return jsonify({'success': 'Your location has been updated'}), 200


@app_views.route('/settings/changepass', methods=['POST'], strict_slashes=False)
@login_required
def change_password():
    """
    change a user's password
    """
    password = request.form.get('password')
    if not password:
        return jsonify({'error': 'You did not enter a password'}), 400
    hashed_pwd = bcrypt.generate_password_hash(password).decode('utf-8')
    current_user.password = hashed_pwd
    db.session.commit()
    return jsonify({'success': 'Your password has been changed'}), 200


@app_views.route('/settings/changeemail', methods=['POST'], strict_slashes=False)
@login_required
def update_email():
    """
    change/update a user email address
    """
    email = request.form.get('email')
    if not email:
        return jsonify({'error': 'Please provide an email address'}), 400
    check_email = validate_email(email)
    if not check_email:
        current_user.email = email
        db.session.commit()
        return jsonify({'success': 'Your email has been updated'}), 200
    else:
        return jsonify({'error': 'Email has already been taken'}), 400


@app_views.route('/settings/changephone', methods=['POST'], strict_slashes=False)
@login_required
def update_phone():
    """
    change/update a user phone number
    """
    phone = request.form.get('phone_number')
    if not phone:
        return jsonify({'error': 'Please provide a valid phone number'}), 400
    check_phone = validate_phone(phone)
    if not check_phone:
        current_user.phone_number = phone
        db.session.commit()
        return jsonify({'success': 'Your phone number has been updated'}), 200
    else:
        return jsonify({'error': 'This phone number has already been registered by another user'}), 400


@app_views.route('/settings/delete', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_account():
    """
    deletes a user account
    """
    user = User.query.get(current_user.id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'error': 'You account has been deleted.'}), 200
