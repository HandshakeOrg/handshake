#!/usr/bin/python3
"""
Start Handshake web application
"""
from server import app


if __name__ == '__main__':
    app.run(port=5000, host='127.0.0.1')
