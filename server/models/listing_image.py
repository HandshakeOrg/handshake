#!/usr/bin/python3
"""

"""


from server import db


class Listing_image(db.Model):
    """
    creates a class Listing_image which represents the images table
    Map the ORM to python object
    """
    __tablename__ = 'listing_image'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(255))
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)

    def __repr__(self):
        """

        """
        return f'Listing Image({self.id}, {self.image})' 
