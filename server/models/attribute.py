#!/usr/bin/python3
"""

"""


from server import db


class Attribute(db.Model):
    """
    
    """
    __tablename__ = 'attribute'
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    attribute_name = db.Column(db.String(120), nullable=False)
    attribute_unit = db.Column(db.String(120))
    values = db.Column(db.String(1024))
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)

    
    def __repr__(self):
        """

        """
        return f'Attribute({self.id}, {self.attribute_name}, {self.attribute_unit}, {self.values})'
