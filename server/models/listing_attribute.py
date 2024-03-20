#!/usr/bin/python3
"""
Model for listing-attributes table
This tables holds the attributes specific to a list
maps tables to python objects and
prints the official string representation of the class
"""


from server import db


class Listing_attribute(db.Model):
    """
    creates a class Listing_atributes
    Map the ORM to python object
    """
    __tablename__ = 'listing_attribute'
    id = db.Column(db.Integer, primary_key=True)
    listing_attribute = db.Column(db.String(120))
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'),
                           nullable=False)

    def __repr__(self):
        """
        Prints official string representation of the class
        """
        return f'Listing Attribute({self.id}, {self.listing_id}, \
                {self.listing_attribute})'
