#!/usr/bin/python3
"""

"""


from flask import jsonify
from flask_login import current_user
from server import db
from server.models.user import User
from server.models.category import Category
from server.models.listing import Listing
from server.models.conversation import Conversation
from server.models.message import Message
from server.views import app_views



@app_views.route('/profile', methods=['GET'], strict_slashes=False)
def profile():
    """

    """
    if current_user.is_authenticated:
        listings = []
        for list in current_user.listings:
            user_listings = {
                    'id': list.id,
                    'user_type': list.user_type,
                    'title': list.title,
                    'status': list.status,
                    'category': list.category.category_name,
                    'posted_at': list.posted_at
            }
            listings.append(user_listings)
        return jsonify({
        'id': current_user.id,
        'firstname': current_user.firstname,
        'lastname': current_user.lastname,
        'email': current_user.email,
        'phone_number': current_user.email,
        'user_listings': user_listings
    }), 200
    else:
        abort(401)


@app_views.route('/profile/messages', methods=['GET'], strict_slashes=False)
def profile_messages():
    """

    """
    if current_user.is_authenticated:
    
    # Listings the user had conversations on
        conversation_list = []
        for listing in current_user.conversation.listings:
            listings = {
                    'id': listing.id,
                    'title': listing.title,
                    'description': listing.description,
                    'status': listing.status,
                    'price': listing.price,
                    'salary': listing.salary,
                    'posted_at': listing.posted_at
                    }
            conversation_list.append(listings)

    # conversations made by user
        conversations = []
        for conversation in current_user.conversations:
            user_conversations = {
                    'id': conversation.id,
                    'title': conversation.title,
                    'sender_id': conversation.sender_id,
                    'recipient_id': conversation.recipient_id,
                    'listing': conversation_list
                    'messages': conversation.messages.message
                    'message_date': conversation.messages.message_date
                    }
            conversations.append(user_conversations)
    else:
        abort(401)
