# Introduction
Welcome to handshake!

This README serves as a guide to understand and utilize the features of our web application effectively.
Handshake is a dynamic and versatile web-based application poised to redefine the job search and classified ad experience. It combines the functionalities of a job board and classified ads platform, enabling and empowering users to effortlessly browse, post, and manage listings for employment opportunities and transactions.

# Getting Started
- Clone this repository to your local machine.
- Ensure that python and node is install on your system

## Setting up the backend
- Use the terminal or command prompt and navigate to the server directory
- Create a virtual environment in handshake directory using this code:

**For windows**
```bash
python -m venv venv
.\venv\Scripts\activate.bat
```
**For Linux**
```bash
python -m venv venv
source venv/bin/activate
```
- Install all dependencies
```bash
pip install -r requirement.txt
```
- Set up your mysql server
- Update the sql uri in the __init__ file by commenting line 48 and commenting out line 47
- copy the code in setup_mysql_test.sql and run it in your running mysql server
- Or
```bash
mysql -u your_username -p < setup_mysql_test.sql
```
- Start the flask app, (cd to the handshake directory, very important!)
```bash
python -m server.app
```
- Your server api is now accessible on port 5000, http://localhost:5000/api/{endpoint}

## Setting up the frontend

- Use the terminal or command prompt and navigate the the client directory
- Install dependencies using
```
npm install
```
- Start the development server using
```
npm run dev
```
- Access the application in your browser at http://localhost:5173.

# Endpoints
Below are the endpoints available in handshake:
- /api/signup: This endpoint signs up user.

> Method: POST

> URL: localhost:5000/api/signup

> Mandatory Parameters:

> > 'firstname': firstname,

> > 'lastname': lastname,

> > 'email': email,

> > 'phone_number': phone_number,

> > 'password': password,

> > 'confirm_password': confirm_password

> Response:
```
{
'user_id': user.id
}
```

