#!/usr/bin/python3
"""

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
    user = db.relationship('User', backref='city', cascade='all, delete, delete-orphan')
    
    def __repr__(self):
        """

        """
        return f'City({self.id}, {self.name})' 
