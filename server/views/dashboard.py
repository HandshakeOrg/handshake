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


@app_views.route('/dashboard', methods=['GET'], strict_slashes=False)
def profile():
    """
    Displays the user's dashboard
    """
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403

    if current_user.is_authenticated:
        return jsonify({
            'id': current_user.id,
            'firstname': current_user.firstname,
            'lastname': current_user.lastname,
            'email': current_user.email,
            'phone_number': current_user.email,
        }), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401

@app_views.route('/dashboard/listings', methods=['GET'], strict_slashes=False)
def profile_listings():
    """
    displays all the listings  posted by the user
    """
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403

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
        return jsonify({'user_listings': listings}), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401


@app_views.route('/dashboard/messages', methods=['GET'], strict_slashes=False)
def profile_messages():
    """
    display all conversations under a listing
    """
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403

    if current_user.is_authenticated:

        # Messages sent and recieved by user
        sent_messages = []
        for conversation in current_user.sent_conversations:
            for message in conversation.messages:
                msg = {'conversation':
                        {
                            'id': conversation.id,
                            'title': conversation.title,
                            'sender_id': conversation.sender_id,
                            'recipient_id': conversation.recipient_id,
                            'status': conversation.status,
                            'message': {
                                'id': message.id,
                                'content': message.message,
                                'sender_id': message.sender_id,
                                'recipient_id': message.recipient_id,
                                'message_date': message.message_date
                            }
                        }
                    }
            sent_messages.append(msg)

        # Messages sent and recieved by user
        received_messages = []
        for conversation in current_user.received_conversations:
            for message in conversation.messages:
                msg = {'conversation':
                        {
                            'id': conversation.id,
                            'title': conversation.title,
                            'sender_id': conversation.sender_id,
                            'recipient_id': conversation.recipient_id,
                            'status': conversation.status,
                            'message': {
                                'id': message.id,
                                'content': message.message,
                                'sender_id': message.sender_id,
                                'recipient_id': message.recipient_id,
                                'message_date': message.message_date
                            }
                        }
                    }
            received_messages.append(msg)

        return jsonify({
                'sent_messages': sent_messages,
                'received_messages': received_messages
                }), 200
    else:
        return jsonify({'error': 'You are not authorized to get this information'}), 401
