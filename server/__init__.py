#!/usr/bin/python3
"""
Initialize handshake web application
push app context
"""


from os import getenv
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

HANDSHAKE_MYSQL_HOST = getenv('HANDSHAKE_MYSQL_HOST')
HANDSHAKE_MYSQL_DB = getenv('HANDSHAKE_MYSQL_DB')
HANDSHAKE_MYSQL_USER = getenv('HANDSHAKE_MYSQL_USER')
HANDSHAKE_MYSQL_PWD = getenv('HANDSHAKE_MYSQL_PWD')
HANDSHAKE_MYSQL_ENV = getenv('HANDSHAKE_MYSQL_ENV')

app = Flask(__name__)
app.config['SECRET_KEY'] = ''
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{HANDSHAKE_MYSQL_USER}:{HANDSHAKE_MYSQL_PWD}@{HANDSHAKE_MYSQL_HOST}/{HANDSHAKE_MYSQL_DB}'
db = SQLAlchemy(app)



app.app_context().push()
