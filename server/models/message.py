#!/usr/bin/python3
"""
Model for messages table
maps tables to python objects and
prints the official string representation of the class
"""


from server import db
from datetime import datetime


class Message(db.Model):
    """
    creates a class Message which represents the messages table
    Map the ORM to python object
    """
    __tablename__ = 'messages'
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text, nullable=False)
    message_date = db.Column(db.DateTime, nullable=False, default=datetime.now)
    conversation_id = db.Column(db.Integer, db.ForeignKey('conversations.id'))
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                          nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                          nullable=False)

    def __repr__(self):
        """
        Prints official string representation of the message class
        """
        return f'Messages({self.id}, {self.message}, {self.sender_id}, \
                {self.recipient_id},{self.message_date})'
