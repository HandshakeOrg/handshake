#!/usr/bin/python3
"""
Initialize handshake web application
push app context
"""

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

# Loads the environmental variable from the .env file
load_dotenv()

# Get environmental variable that contains info for our database connection
HANDSHAKE_MYSQL_HOST = os.environ.get('HANDSHAKE_MYSQL_HOST')
HANDSHAKE_MYSQL_DB = os.environ.get('HANDSHAKE_MYSQL_DB')
HANDSHAKE_MYSQL_USER = os.environ.get('HANDSHAKE_MYSQL_USER')
HANDSHAKE_MYSQL_PWD = os.environ.get('HANDSHAKE_MYSQL_PWD')
HANDSHAKE_MYSQL_ENV = os.environ.get('HANDSHAKE_MYSQL_ENV')

# Initialize flask application
app = Flask(__name__)

# Set up secret key for signing sessions
# import secrets
# secrets.token_hex() will generate a new token
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# Defines the database uri for the sqlalchemy connection the mysql and also use a dialect
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://{HANDSHAKE_MYSQL_USER}:{HANDSHAKE_MYSQL_PWD}@{HANDSHAKE_MYSQL_HOST}:3306/{HANDSHAKE_MYSQL_DB}'

# initialize the sqlalchemy orm
db = SQLAlchemy(app)
