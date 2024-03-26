import unittest
from flask import Flask, session, json
from flask_testing import TestCase
from server.views import app_views
from server.models import User, Listing
from server import db
from flask_login import LoginManager, login_user
from datetime import datetime


class TestSignUpPage(TestCase):
    """This class should test our signup page if it works properly"""

    def create_app(self):
        """Create a test application"""
        self.app = Flask(__name__)
        self.app.config['TESTING'] = True
        self.app.register_blueprint(app_views)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.app.config['SECRET_KEY'] = 'a0cc0c51be487938f88208c7db5f165921c7c733f6fe7a72f6d8e7289a9513b6'

        # Create an instance of LoginManager
        self.login_manager = LoginManager()
        self.login_manager.init_app(self.app)

        @self.login_manager.user_loader
        def load_user(user_id):
            """
            wrapper function
            loads a user from the database by the user_id
            """
            return User.query.get(int(user_id))

        db.init_app(self.app)
        with self.app.app_context():
            db.create_all()
        return self.app


    def tearDown(self):
        """Create the tear down method"""
        with self.app.app_context():
            db.session.remove()
            db.drop_all()


    def test_listing_search(self):
        """Test that users are able to search for their listing successfully"""

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
            login_user(user)
            db.session.add(user)
            with self.client:
                listing = Listing(user_type='seller',
                            title='Software Product',
                            description='This laptop is the',
                            location='Nigeria',
                            status='active',
                            price_negotiable='$1000',
                            expiry_date=datetime.strptime('2024-03-22 12:34:56', '%Y-%m-%d %H:%M:%S'),
                            user_id=user.id,
                            category_id='fakeId')
                db.session.add(listing)
                db.session.commit()
                response = self.client.get('/api/listings_search?title=software')

        data = response.json
        print(data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['listings'][0].get('status'), 'active')

    def test_listing_search_2(self):
        """Test that users are able to search for their listing successfully"""

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
            login_user(user)
            db.session.add(user)
            with self.client:
                listing = Listing(user_type='seller',
                            title='Software Product',
                            description='This laptop is the',
                            location='Nigeria',
                            status='active',
                            price_negotiable='$1000',
                            expiry_date=datetime.strptime('2024-03-22 12:34:56', '%Y-%m-%d %H:%M:%S'),
                            user_id=user.id,
                            category_id='fakeId')
                db.session.add(listing)
                db.session.commit()
                response = self.client.get('/api/listings_search?location=Nigeria')

        data = response.json
        print(data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['listings'][0].get('status'), 'active')
