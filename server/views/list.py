from server.views import app_views

@app_views.route('/', strict_slashes=False, methods=['GET'])
def input():
    """Test application"""
    return 'I am working yaaa!'
