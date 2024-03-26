"""
The module creates the ability for users to be
able to create post and listings
"""

from server.views import app_views
from server.models import Listing, User, Listing_attribute, Listing_image, conversation
from flask import request, jsonify, abort


# Users must be able to search for listings based on query parameters, by:
#   title, status, location
@app_views.route('/listings_search', strict_slashes=False, methods=['GET'])
def search_listings_search():
    """find me that listing"""
    try:
        title = request.args.get('title', '', type=str)
        status = request.args.get('status', None, type=str)
        location = request.args.get('location', None, type=str)

        # Query the database and get the listing that meets the requirement
        listing = Listing.query.filter(Listing.title.like('%' + title + '%'))

        if status:
            listing = listing.filter_by(status=status)
        if location:
            listing = listing.filter_by(location=location)

        if not listing:
            return jsonify({
                'success': 'No user with that title and/or status and/or location'
                })

        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        data = listing.paginate(page=page, per_page=per_page)
        total_pages = data.pages
        next_page = None
        prev_page = None
        if data.has_next:
            next_page = data.next_num
        if data.has_prev:
            prev_page = data.prev_num

        listings_data = []
        for listing in data.items:
            info = {
            'user_type': listing.user_type,
            'title': listing.title,
            'description': listing.description,
            'location': listing.location,
            'status': listing.status,
            'price_negotiable': listing.price_negotiable,
            'expiry_date': listing.expiry_date,
            'user_id': listing.user_id,
            'category_id': listing.category_id,
            'price': listing.price,
            'salary': listing.salary,
            'image_name': listing.image.image if listing.image else ''
            }
            listings_data.append(info)
        return jsonify({
        'listings': listings_data,
        'total_pages': total_pages,
        'prev_page': prev_page,
        'next_page': next_page
        }), 200
    except Exception as e:
        print(e)
        return jsonify({'error', 'an unexpected error occured!'}), 400
