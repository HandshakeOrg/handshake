#!/usr/bin/python3
"""

"""


from server import db
from datetime import datetime


class Message(db.Model):
    """

    """
    __tablename__ = 'messages'
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text, nullable=False)
    message_date = db.Column(db.DateTime, nullable=False, default=datetime.now)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    conversation_id = db.Column(db.Integer, db.ForeignKey('conversations.id'))


    def __repr__(self):
        """

        """
        return f'Messages({self.id}, {self.message}, {self.sender_id}, {self.recipient_id},{self.message_date})'
