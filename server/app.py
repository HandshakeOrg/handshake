#!/usr/bin/python3
"""
Start Handshake web application
"""
from server import app, db, login_manager
from flask_cors import CORS
from server.views import app_views
from flask import jsonify
from server.models import User


@login_manager.user_loader
def load_user(user_id):
    """
    wrapper function
    loads a user from the database by the user_id
    """
    return User.query.get(int(user_id))


# Creates all tables if it does not exist
with app.app_context():
    db.create_all()

# Register blueprint
app.register_blueprint(app_views)
# cors = CORS(app, resources={r'/api/*': {'origins': ['*']}})
cors = CORS(app, supports_credentials=True, resources={r'/api/*': {'origins': ['http://localhost:5173', 'https://handshake-sage.vercel.app']}})

@app.teardown_appcontext
def close_db(error):
    """Close the database"""
    pass


@app.errorhandler(404)
def not_found(error):
    """Returns 404 error with and object indicate not found"""
    return jsonify({'error': 'not found'}), 404


@app.errorhandler(400)
def bad_request(error):
    """"Return 400 when a user sends a bad request"""
    return jsonify({'error': 'Check the details of the information for errors'}), 400


@app.errorhandler(401)
def unauthorized(error):
    """Return 401 when a user is not authorized to get an information"""
    return jsonify({'errror': 'You are not authorized to get this information'}), 401


@app.errorhandler(500)
def server_error(error):
    """When a server error occurs, send a server message"""
    return jsonify({'error': 'A server error occured, please try again later'}), 500


# Start the application if it was not imported
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
