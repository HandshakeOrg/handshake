from server.views import app_views
from server.models import Listing

@app_views.route('/', strict_slashes=False, methods=['GET'])
def list():
    """Test application"""
    return 'I am working yaaa!'
