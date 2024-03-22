#!/usr/bin/python3
"""
Model for the country table
maps tables to python objects and
prints the official string representation of the class
"""


from server import db

class Country(db.Model):
    """
    creates a class Country which represents the countries table
    Map the ORM to python object
    """
    __tablename__ = 'country'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    currency = db.Column(db.String(20))
    state = db.relationship('State', backref='country',
                            cascade='all, delete, delete-orphan')

    def __repr__(self):
        """
        Prints official string representation of the Country class
        """
        return f'Country({self.id}, {self.name}, {self.currency})'
