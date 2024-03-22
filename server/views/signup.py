from server.views import app_views
from flask import jsonify, request, abort
from server.models import User
from server import db, bcrypt

@app_views.route('/signup', strict_slashes=False, methods=['POST'])
def signupUser():
    """Test application"""

    # For a user to signup, the:
    # firstname, lastname, email, phone_number, password, confirm_password
    # fields must be provided
    # 
    # if the content type is application/json use request.json
    # if it is a form data use reques.form "application/x-www-form-urlencoded"
    if request.headers['Content-Type'] == 'application/json':
        firstname = request.json.get('firstname')
        lastname = request.json.get('lastname')
        email = request.json.get('email')
        phone_number = request.json.get('phone_number')
        password = request.json.get('password')
        confirm_password = request.json.get('confirm_password')
    elif request.headers['Content-Type'] == 'application/x-www-form-urlencoded':
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        email = request.form.get('email')
        phone_number = request.form.get('phone_number')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
    else:
        return jsonify({'error': 'You need to specify the header for the data'}), 403

    data = {'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'phone_number': phone_number,
            'password': password,
            'confirm_password': confirm_password}

    for datum in data.keys():
        if not data[datum]:
            return jsonify({'error': f"Provide the {datum} fields!"}), 403
    try:
        # No two user can have the same email
        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({'error': 'email already taken'}), 400

        # No two user can have the same phone number
        user = User.query.filter_by(phone_number=phone_number).first()
        if user:
            return jsonify({'error': 'phone number already taken'}), 400

        # The password field must equal the confirm_password field
        if password != confirm_password:
            return jsonify({'error': 'Your password and confirm_password fields needs to be the same'}), 400

        # The password must be hashed using bcrypt before been stored in the database
        hashed_password = bcrypt.generate_password_hash(password)

        # All things been equal, proceed to create a new user
        user = User(firstname=firstname,
            lastname=lastname,
            email=email,
            phone_number=phone_number,
            password=hashed_password,
            city_id=None)
        db.session.add(user)
        db.session.commit()
        return jsonify({'user_id': user.id }), 200
    except Exception as e:
        print(e)
        abort(400)
