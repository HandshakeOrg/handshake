#!/usr/bin/python3
"""

"""


from flask import jsonify, abort
from flask_login import current_user, login_required
from server import db
from server.views import app_views
from server.models.user import User
from server.models.category import Category
from server.models.listing import Listing
from server.models.conversation import Conversation
from server.models.message import Message


#@login_required
@app_views.route('/dashboard', methods=['GET'], strict_slashes=False)
def profile():
    """
    Displays the user's dashboard
    """
    if current_user.is_authenticated:
        print(f"This is the current user's email: {current_user.email}")
        return jsonify({
            'id': current_user.id,
            'firstname': current_user.firstname,
            'lastname': current_user.lastname,
            'email': current_user.email,
            'phone_number': current_user.email,
        }), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401


#@login_required
@app_views.route('/dashboard/listings', methods=['GET'], strict_slashes=False)
def profile_listings():
    """
    displays all the listings  posted by the user
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
        return jsonify({'user_listings': user_listings}), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401


#@login_required
@app_views.route('/dashboard/messages', methods=['GET'], strict_slashes=False)
def profile_messages():
    """
    display all conversations under a listing
    """
    if current_user.is_authenticated:

        # Listings the user had conversations on
        conversation_list = []
        for listing in current_user.conversations.listings:
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
        user_messages = []
        for conversation in current_user.conversations:
            user_conversations = {
                    'id': conversation.id,
                    'title': conversation.title,
                    'sender_id': conversation.sender_id,
                    'recipient_id': conversation.recipient_id,
                    'listing': conversation_list,
                    'messages': conversation.messages.message,
                    'message_date': conversation.messages.message_date
                    }
            user_messages.append(user_conversations)
        return jsonify({
                'conversation_list': conversation_list,
                'user_messages': user_messages
                }), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401 
