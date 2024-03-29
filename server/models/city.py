#!/usr/bin/python3
"""
Model for the cities table
maps tables to python objects and
prints the official string representation of the class
"""


from server import db


class City(db.Model):
    """
    creates a class City which represents the city table
    Map the ORM to python object
    """
    __tablename__ = 'city'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('state.id'), nullable=False)
    user = db.relationship('User', backref='city')

    def __repr__(self):
        """
        Prints official string representation of the City class
        """
        return f'City({self.id}, {self.name})'
