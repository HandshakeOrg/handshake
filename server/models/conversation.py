#!/usr/bin/python3
"""

"""


from server import db


class Conversation(db.Model):
    """

    """
    __tablename__ = 'conversations'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    status = db.Column(db.String(20), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    listing_id =db.Column(db.Integer, db.ForeignKey('listings.id'))
    messages = db.relationship('Message', backref='conversations', cascade='all, delete, delete-orphan')


    def __repr__(self):
        """

        """
        return f'Conversations({self.id}, {self.title}, {self.sender_id}, {self.recipient_id}. {self.status})'
