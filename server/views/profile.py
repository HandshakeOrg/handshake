"""
The module creates the ability for users to be
able to create post and listings
"""

from server.views import app_views
from server.models import Listing, User, Listing_attribute, Listing_image, conversation
from flask import request, jsonify, abort
from flask_login import current_user
from server import db


# A user profile contains information about their:
#   fullname, email, phone_number date registered, city, country, state
#   No of listings created by the user, and the listings_id and listing_title.
@app_views.route('/profile/<user_id>', strict_slashes=False, methods=['GET'])
def profile(user_id):
    """Get the users profile"""
    if not user_id:
        return jsonify({'error': 'Please specify user Id'})
        # Users must be logged in to make a post
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403
    user = db.session.query(User).filter_by(id=int(user_id)).first()
    if not user:
        return jsonify({'error': 'user not was found!'}), 400
    try:
        data = {
            'firstname': user.firstname,
            'lastname': user.lastname,
            'email': user.email,
            'phone_number': user.phone_number,
            'created_at': user.created_at,
            'No_of_listings': len(user.listings),
            'id_of_listings': [{ 'listings_id': listing.id, 'listing_title': listing.title} for listing in user.lisitings],
        }
        if user.city:
            data['city'] = user.city
            if user.city.state:
                data['state'] = user.city.state
                if user.city.state.country:
                    data['country'] = user.city.state.country
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': f'This error occured: {e}'})
