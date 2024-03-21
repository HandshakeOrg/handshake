#!/usr/bin/python3
"""
Start Handshake web application
"""
from server import app, db
from server.views import app_views

# Creates all tables if it does not exist
with app.app_context():
    db.create_all()

# Register blueprint
app.register_blueprint(app_views)

# Start the application if it was not imported
if __name__ == '__main__':
    app.run(port=5000, host='127.0.0.1')
