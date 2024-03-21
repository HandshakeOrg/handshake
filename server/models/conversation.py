#!/usr/bin/python3
"""
Model for conversation table
maps tables to python objects and
prints the official string representation of the class
"""


from server import db


class Conversation(db.Model):
    """
    creates a class Conversation which represents the conversation table
    Map the ORM to python object
    """
    __tablename__ = 'conversations'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    status = db.Column(db.String(20), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                          nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                             nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'))
    messages = db.relationship('Message', backref='conversations',
                               cascade='all, delete-orphan')

    def __repr__(self):
        """
        Prints official string representation of the conversation class
        """
        return f'Conversations({self.id}, {self.title}, {self.sender_id}, \
                {self.recipient_id}. {self.status})'
