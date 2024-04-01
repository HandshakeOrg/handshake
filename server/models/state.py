#!/usr/bin/python3
"""
Model for states table
maps tables to python objects and
prints the official string representation of the class
"""


from server import db

class State(db.Model):
    """
    creates a class State which represents the states table
    Map the ORM to python object
    """
    __tablename__ = 'state'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'),
                           nullable=False)
    city = db.relationship('City', backref='state',
                           cascade='all, delete, delete-orphan')
    user = db.relationship('User', backref='state',
                           cascade='all, delete-orphan')

    def __repr__(self):
        """
        Prints official string representation of the State class
        """
        return f'State({self.id}, {self.name})'
