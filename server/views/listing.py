"""
The module creates the ability for users to be
able to create post and listings
"""

from server.views import app_views
from server.models import Listing, User, Listing_attribute, Listing_image, conversation
from flask import request, jsonify, abort
from flask_login import current_user
from werkzeug.utils import secure_filename
from server import allowed_file, UPLOAD_LIST_IMAGE_FOLDER, db
import os
from datetime import datetime


# Users must be able to create a listing
@app_views.route('/create_listings', strict_slashes=False, methods=['POST'])
def create_listings():
    """Create Listing for users"""

    # Users must be logged in to make a post
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403
    try:
        if request.headers['Content-Type'] == 'application/json':
            user_type = request.json.get('user_type')
            title = request.json.get('title')
            description = request.json.get('description')
            location = request.json.get('location')
            status = request.json.get('status')
            price = request.json.get('price')
            salary = request.json.get('salary')
            price_negotiable = request.json.get('price_negotiable')
            expiry_date = request.json.get('expiry_date')
            user_id = request.json.get('user_id')
            category_id = request.json.get('category_id')
        elif request.headers['Content-Type'] == 'application/x-www-form-urlencoded':
            user_type = request.json.get('user_type')
            title = request.json.get('title')
            description = request.json.get('description')
            location = request.json.get('location')
            status = request.json.get('status')
            price = request.json.get('price')
            salary = request.json.get('salary')
            price_negotiable = request.json.get('price_negotiable')
            expiry_date = request.json.get('expiry_date')
            user_id = request.json.get('user_id')
            category_id = request.json.get('category_id')
        else:
            return jsonify({'error': 'You need to specify the header for the data'}), 403
    except Exception as e:
        abort(400)

    # Users must have all this fields in order to make a simple post
    data = {
        'user_type': user_type,
        'title':title,
        'description': description,
        'location': location,
        'status': status,
        'price_negotiable': price_negotiable,
        'expiry_date': expiry_date,
        'user_id': user_id,
        'category_id': category_id
        }
  
    for datum in data.keys():
        if not data[datum]:
            return jsonify({'error': f"Provide the {datum} field!"}), 403

    user = db.session.query(User).filter_by(id=int(user_id)).first()
    if not user:
        return jsonify({'error': 'User does not exist, please check the user id!'}), 400
    image = False
    # A name of the image must be a secure one, based on
    # the allowed_file names in our init file
    if 'file' in request.files:
        image_file = request.files['file']
        if image_file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        if image_file and allowed_file(image_file.filename):
            image_filename = secure_filename(image_file.filename)
            file_path = os.path.join(UPLOAD_LIST_IMAGE_FOLDER, image_filename)
            image_file.save(file_path)
            image = True
    try:
        listing = Listing(
            user_type=user_type,
            title=title,
            description=description,
            location=location,
            status=status,
            price_negotiable=price_negotiable,
            expiry_date=datetime.strptime(expiry_date, '%Y-%m-%d'),
            user_id=user_id,
            category_id=category_id)
    except Exception:
        return jsonify({'error': 'Format the expiry date to look like this: 2024-03-22'})

    if image:
        listing_image = Listing_image(listing_id=listing.id, image=image_filename)
        listing.image = listing_image
    if price:
        listing.price = price
    if salary:
        listing.salary = salary
    try:
        db.session.add(listing)
        db.session.commit()
        return jsonify({'success': 'Listing was created successfully!'}), 200
    except Exception as e:
        print(e)
        db.session.rollback()
        if image and os.path.exists(file_path):
            os.remove(file_path)
        return jsonify({'error': 'An error occured while trying the create listing!'}), 500


# Users must be able to edit a listing
@app_views.route('/update_listings/<listing_id>', strict_slashes=False, methods=['PUT'])
def update_listings(listing_id):
    """This will help users to update their listing information"""
    
    # Users must be logged in to make a post
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403

    if request.headers['Content-Type'] == 'application/json':
        user_type = request.json.get('user_type')
        title = request.json.get('title')
        description = request.json.get('description')
        location = request.json.get('location')
        status = request.json.get('status')
        price = request.json.get('price')
        salary = request.json.get('salary')
        price_negotiable = request.json.get('price_negotiable')
        expiry_date = request.json.get('expiry_date')
        user_id = request.json.get('user_id')
        category_id = request.json.get('category_id')
    elif request.headers['Content-Type'] == 'application/x-www-form-urlencoded':
        user_type = request.json.get('user_type')
        title = request.json.get('title')
        description = request.json.get('description')
        location = request.json.get('location')
        status = request.json.get('status')
        price = request.json.get('price')
        salary = request.json.get('salary')
        price_negotiable = request.json.get('price_negotiable')
        expiry_date = request.json.get('expiry_date')
        user_id = request.json.get('user_id')
        category_id = request.json.get('category_id')
    else:
        return jsonify({'error': 'You need to specify the header for the data'}), 403

    # Users must have all this fields in order to make a simple post
    data = {
            'user_type': user_type,
            'title':title,
            'description': description,
            'location': location,
            'status': status,
            'price_negotiable': price_negotiable,
            'expiry_date': datetime.strptime(expiry_date, '%Y-%m-%d'),
            'user_id': user_id,
            'category_id': category_id,
            'price': price,
            'salary': salary
        }
    if not listing_id:
        return jsonify({'error': 'Please provide the listing id!'}), 400
    if not user_id:
        return jsonify({'error': 'Please provide the user id in the input!'}), 400
    user = db.session.query(User).filter_by(id=int(user_id)).first()
    if not user:
        return jsonify({'error': 'User does not exist, please check the user id!'}), 400
    
    image = False
    # A name for the image must be a secure one, based on
    # the allowed_file names in our init file
    if 'file' in request.files:
        image_file = request.files['file']
        if image_file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        if image_file and allowed_file(image_file.filename):
            image_filename = secure_filename(image_file.filename)
            file_path = os.path.join(UPLOAD_LIST_IMAGE_FOLDER, image_filename)
            image_file.save(file_path)
            image = True
    listing = db.session.query(Listing).filter_by(id=listing_id).first()
    if not listing:
        return jsonify({'error': 'Listing is not found'}), 400

    if image:
        listing_image = Listing_image(listing_id=listing.id, image=image_filename)
        listing.image = listing_image
    if price:
        listing.price = price
    if salary:
        listing.salary = salary
    try:
        # update the listing details
        for key, value in data.items():
            if value:
                setattr(listing, key, value)
        db.session.add(listing)
        db.session.commit()
        return jsonify({'success': 'Listing was updated successfully!'}), 200

    except Exception as e:
        print(e)
        db.session.rollback()
        if image and os.path.exists(file_path):
            os.remove(file_path)
        return jsonify({'error': 'An error occured while trying to update listing!'}), 500


# Users must be able to delete a listing
@app_views.route('/delete_listings/<listing_id>', strict_slashes=False, methods=['DELETE'])
def delete_listings(listing_id):
    """Users must be able to delete a listing"""
    
    # Users must be logged in to make a post
    if not current_user.is_authenticated:
        return jsonify({'error': 'Please login to your account!'}), 403
    listing = db.session.query(Listing).filter_by(id=listing_id).first()
    if listing:
        try:
            db.session.delete(listing)
            db.session.commit()
            return jsonify({'success': 'Deleted successfully'}), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': 'An error occured while trying to delete listing!'}), 500
    return jsonify({'error': 'Could not find the listing id!'})

# Users must be able to get all the listings page by page
@app_views.route('/get_listings', strict_slashes=False, methods=['GET'])
def get_listings():
    """get listings page by page"""

    # A user must specify the page that is needed
    page = request.args.get('page', 1, type=int)

    # This sets the number of listings per page
    listing_per_page = 10
    listings = Listing.query.paginate(page=page, per_page=listing_per_page, count=False)
    total_pages = listings.pages

    if listings.has_next:
        next_page = listings.next_num
    else:
        next_page = None
    if listings.has_prev:
        prev_page = listings.prev_num
    else:
        prev_page = None

    listings_data = []
    for listing in listings.items:
        data = {
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
            'image_name': listing.image.image if listing.image else []
        }
        listings_data.append(data)
    return jsonify({
        'listings': listings_data,
        'total_pages': total_pages,
        'prev_page': prev_page,
        'next_page': next_page
    }), 200
