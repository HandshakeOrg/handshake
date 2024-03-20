#!/usr/bin/python3
"""

"""


from server import db


class Listing_attribute(db.Model):
    """
    creates a class Listing_image which represents the images table
    Map the ORM to python object
    """
    __tablename__ = 'listing_attribute'
    id = db.Column(db.Integer, primary_key=True)
    listing_attribute = db.Column(db.String(120))
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)

    def __repr__(self):
        """

        """
        return f'Listing Attribute({self.id}, {self.listing_id}, {self.listing_attribute})' 
