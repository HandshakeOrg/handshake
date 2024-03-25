#!/usr/bin/python3
"""
Initialize handshake web application
push app context
"""

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt
from flask_login import LoginManager


# Loads the environmental variable from the .env file
load_dotenv()

# Get environmental variable that contains info for our database connection
HANDSHAKE_MYSQL_HOST = os.environ.get('HANDSHAKE_MYSQL_HOST')
HANDSHAKE_MYSQL_DB = os.environ.get('HANDSHAKE_MYSQL_DB')
HANDSHAKE_MYSQL_USER = os.environ.get('HANDSHAKE_MYSQL_USER')
HANDSHAKE_MYSQL_PWD = os.environ.get('HANDSHAKE_MYSQL_PWD')
HANDSHAKE_MYSQL_ENV = os.environ.get('HANDSHAKE_MYSQL_ENV')

# Create an instance of LoginManager
login_manager = LoginManager()

# Initialize flask application
app = Flask(__name__)

# use flask_bcrypt for safely hashing our passwords
bcrypt = Bcrypt(app)

login_manager.init_app(app)

# Customize login process
login_manager.login_view = 'views.login.login'
login_manager.login_message_category = 'info'
login_manager.login_message = 'Please log in to access this page.'

# Set up secret key for signing sessions
# import secrets
# secrets.token_hex() will generate a new token
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# Defines the database uri for the sqlalchemy connection the mysql and also use a dialect
# app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{HANDSHAKE_MYSQL_USER}:{HANDSHAKE_MYSQL_PWD}@{HANDSHAKE_MYSQL_HOST}:3306/{HANDSHAKE_MYSQL_DB}'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://handshake_test_db_user:8xhja22cqBQJkeOFd4FsI6ZoRDgolouE@dpg-co0trv7jbltc73955hsg-a/handshake_test_db'
# initialize the sqlalchemy orm
db = SQLAlchemy(app)
