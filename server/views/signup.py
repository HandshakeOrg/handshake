from server.views import app_views
from flask import jsonify, request, abort
from server.models import User, City, State
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
    try:
        req_head = request.headers['Content-Type'] 
        if req_head == 'application/json':
            firstname = request.json.get('firstname')
            lastname = request.json.get('lastname')
            email = request.json.get('email')
            phone_number = request.json.get('phone_number')
            password = request.json.get('password')
            confirm_password = request.json.get('confirm_password')
            city_id = request.json.get('city_id')
            state_id = request.json.get('state_id')
        elif req_head == 'application/x-www-form-urlencoded':
            firstname = request.form.get('firstname')
            lastname = request.form.get('lastname')
            email = request.form.get('email')
            phone_number = request.form.get('phone_number')
            password = request.form.get('password')
            confirm_password = request.form.get('confirm_password')
            city_id = request.form.get('city_id')
            state_id = request.form.get('state_id')
        else:
            return jsonify({'error': 'You need to specify the header for the data'}), 403
    except Exception:
        abort(400)

    data = {'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'phone_number': phone_number,
            'password': password,
            'confirm_password': confirm_password}

    for datum in data.keys():
        if not data[datum]:
            return jsonify({'error': f"Provide the {datum} field!"}), 403
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

        # if city id is sent, it should be an existing city
        if city_id:
            city = City.query.filter_by(id=int(city_id)).first()
            if not city:
                return jsonify({'error': 'This city is not loaded yet!'}), 400
        
        # if state id is sent, it should be an existing state
        if state_id:
            state = State.query.filter_by(id=int(state_id)).first()
            if not state:
                return jsonify({'error': 'This state is not loaded yet!'}), 400
    
        # All things been equal, proceed to create a new user
        user = User(firstname=firstname,
            lastname=lastname,
            email=email,
            phone_number=phone_number,
            password=hashed_password.decode('utf-8'),
            city_id=city_id,
            state_id=state_id)
        db.session.add(user)
        db.session.commit()
        return jsonify({'user_id': user.id }), 200
    except Exception as e:
        print(e)
        abort(400)
