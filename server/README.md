# this is a sample readme, you could delete when necessary

## How to get the server running

- cd to the handshake folder
- activate a virtual environment, install all dependencies and start app

```bash
    python -m venv venv
    .\venv\Scripts\activate.bat
    python install -r requirement.txt
    python -m server.app
```

- All endpoint are prefixed with
*http://127.0.0.1:5000/api/{endpoint}*


<!-- @app_views.route('/get_listings', strict_slashes=False, methods=['GET'])
 return jsonify({
        'listings': listings_data,
        'total_pages': total_pages,
        'prev_page': prev_page,
        'next_page': next_page
    }), 200 -->
 