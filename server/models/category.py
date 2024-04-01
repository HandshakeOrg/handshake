#!/usr/bin/python3
"""
Model for the categories table
maps tables to python objects and
prints the official string representation of the class
"""


from server import db


class Category(db.Model):
    """
    creates a class Category which represents the category table
    Map the ORM to python object
    """
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(120), nullable=False)
    maximum_images = db.Column(db.Integer, default=1)
    listing_validity = db.Column(db.Integer, nullable=False)
    parent_category_id = db.Column(db.Integer, db.ForeignKey('category.id'),
                                   nullable=True)
    listing = db.relationship('Listing', backref='category')
    attribute = db.relationship('Attribute', backref='category',
                                cascade='all, delete-orphan')

    def __repr__(self):
        """
        Prints official string representation of the Category class
        """
        return f'Category({self.id}, {self.category_name}, \
                {self.listing_validity}, {self.maximum_images})'
