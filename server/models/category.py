#!/usr/bin/python3
"""

"""


from server import db


class Category(db.Model):
    """

    """
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(120), nullable=False)
    maximum_images = db.Column(db.Integer, default=1)
    listing_validity = db.Column(db.Integer, nullable=False)
    parent_category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    listing = db.relationship('Listing', backref='category', cascade='all, delete, delete-orphan')
    attribute = db.relationship('Attribute', backref='category', cascade='all, delete, delete-orphan')

    
    def __repr__(self):
        """

        """
        return f'Category({self.id}, {self.category_name}, {self.listing_validity}, {self.maximum_images})'
