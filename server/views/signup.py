from server.views import app_views
from flask import jsonify, request, session, abort
from server.models import User
from server import db, flask_bcrypt

@app_views.route('/signup', strict_slashes=False, methods=['POST'])
def signupUser():
    """Test application"""

    # For a user to signup, the:
    # firstname, lastname, email, phone_number, password, confirm_password
    # fields must be provided
    firstname = request.form.get('firstname')
    lastname = request.form.get('lastname')
    email = request.form.get('email')
    phone_number = request.form.get('phone_number')
    password = request.form.get('password')
    confirm_password = request.form.get('confirm_password')

    data = [firstname, lastname, email, phone_number, password, confirm_password]

    for datum in data:
        if not datum:
            return jsonify({'error': f"Provide the {datum} fields!"})
    try:
        # No two user can have the same email
        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({'error': 'email already taken'}), 403

        # No two user can have the same phone number
        user = User.query.filter_by(phone_number=phone_number).first()
        if user:
            return jsonify({'error': 'phone number already taken'}), 403

        # The password field must equal the confirm_password field
        if password != confirm_password:
            return jsonify({'error': 'Your password and confirm_password fields needs to be the same'}), 403

        # The password must be hashed using bcrypt before been stored in the database
        hashed_password = flask_bcrypt.generate_password_hash(password)

        # All things been equal, proceed to create a new user
        user = User(firstname=firstname,
            lastname=lastname,
            email=email,
            phone_number=phone_number,
            password=hashed_password,
            city_id=None)
        db.session.add(user)
        db.session.commit()
        return jsonify({'success': True, 'user_id': user.id })
    except Exception as e:
        abort(400)
