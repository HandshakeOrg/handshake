#!/usr/bin/python3
"""

"""


from server import db
from datetime import datetime


class Listing(db.Model):
    """
    creates a class User which represents the users table
    Map the ORM to python object
    """
    __tablename__ = 'listings'
    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, unique=True, nullable=False)
    location = db.Column(db.String(120), nullable=False)
    status = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, default=0.0)
    salary = db.Column(db.Float, default=0.0)
    price_negotiable = db.Column(db.String(20))
    posted_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    expiry_date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    image = db.relationship('Listing_image', backref='listings', cascade='all, delete, delete-orphan')
    attribute = db.relationship('Listing_attribute', backref='listings', cascade='all, delete, delete-orphan')
    conversations = db.relationship('Conversation', backref='listings', cascade='all, delete, delete-orphan')


    def __repr__(self):
        """

        """
        return f'Listings({self.id}, {self.user_type}, {self.title}, {self.description}, {self.location}, {self.status}, {self.price}, {self.salary}, {self.posted_at}, {self.updated_at}, {self.expiry_date})' 
