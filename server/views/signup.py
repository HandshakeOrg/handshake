from server.views import app_views
from flask import jsonify
from server.models import User
from server import db

@app_views.route('/user', strict_slashes=False, methods=['GET'])
def input():
    """Test application"""
    user = User(firstname="Letachelia",
                lastname="Graham",
                email="testme@gmail.com",
                phone_number='08066246494',
                password='chaprapra',
                city_id='Lagos')
    db.session.add(user)
    db.session.commit()
    
    return jsonify({ 'userName': user.firstname + ' ' + user.lastname })
