import unittest
from flask import Flask
from flask_testing import TestCase
from server.views import app_views
from server.models import User
from server import db

class TestSignUpPage(TestCase):
    """This class should test our signup page if it works properly"""

    def create_app(self):
        """Create a test application"""
        self.app = Flask(__name__)
        self.app.config['TESTING'] = True
        self.app.register_blueprint(app_views)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        db.init_app(self.app)
        with self.app.app_context():
            db.create_all()
        return self.app
    
    def tearDown(self):
        """Create the tear down method"""
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_signup_user_success(self):
        """Test that users signup successfully"""
        with self.client:
            response = self.client.post('/api/signup', data = {
            'firstname': 'sdominic',
            'lastname': 'sRaymond',
            'email': 'aymond@gmail.com',
            'password': '112345',
            'confirm_password': '112345',
            'phone_number': '233455632'
        })
        data = response.json
        self.assertEqual(response.status_code, 200)
        self.assertTrue(data['success'])
        self.assertTrue('user_id' in data)

    def test_signup_user_incomplete(self):
        """Test that users signup not successful"""
        with self.client:
            response = self.client.post('/api/signup', data = {
            'lastname': 'sRaymond',
            'email': 'aymond@gmail.com',
            'password': '112345',
            'confirm_password': '112345',
            'phone_number': '233455632'
        })
        data = response.json
        self.assertEqual(response.status_code, 403)
        self.assertEqual(data, {'error': f"Provide the firstname fields!"})

    def test_signup_user_failure(self):
        """Test that users signup successfully"""
        with self.app.app_context():
            # Example: Add a user to the database
            user = User(
                firstname='sdominic',
                lastname='sRaymond',
                email='saymond@gmail.com',
                phone_number='233455632',
                password='112345',
                city_id=None
            )
            db.session.add(user)
            db.session.commit()

        with self.client:
            response = self.client.post('/api/signup', data = {
            'firstname': 'sdominic',
            'lastname': 'sRaymond',
            'email': 'saymond@gmail.com',
            'password': '112345',
            'confirm_password': '112345',
            'phone_number': '233455632'
            })

        data = response.json
        self.assertEqual(response.status_code, 403)
        self.assertTrue(data['error'])
        self.assertDictEqual(data, {'error': 'email already taken'})

if __name__ == '__main__':
    unittest.main()
