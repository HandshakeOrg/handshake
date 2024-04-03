# Introduction
Welcome to handshake!

![logo_no_bg](https://github.com/dominic-source/handshake/assets/68060853/e3d0eabe-d6d7-45d6-80c2-c73065d53fd3)

This README serves as a guide to understand and utilize the features of our web application effectively.
Handshake is a dynamic and versatile web-based application poised to redefine the job search and classified ad experience. It combines the functionalities of a job board and classified ads platform, enabling and empowering users to effortlessly browse, post, and manage listings for employment opportunities and transactions.

# Getting Started
- Clone this repository to your local machine.
- Ensure that Python and Node is installed on your system

# Setting up the backend
- Use the terminal or command prompt and navigate to the server directory
- Create a virtual environment in handshake directory using this code:

**For Windows**
```bash
python -m venv venv
.\venv\Scripts\activate.bat
```
**For Linux**
```bash
sudo apt-get update
pip install --upgrade pip
sudo apt-get install libmysqlclient-dev
sudo apt-get install libpq-dev
python -m venv venv
source venv/bin/activate
```
- Install all dependencies
- cd into the server directory
```bash
pip install -r requirement.txt
```
- Set up your MySQL server
- Update the SQL uri in the __init__ file by commenting line 48 and commenting out line 47
- copy the code in setup_mysql_test.sql and run it in your running MySQL server
- Or
```bash
mysql -u your_username -p < setup_mysql_test.sql
```
- copy the code in data.sql and run it in your running MySQL server, _This will prepopulate you database with important data which is very important for the software to function_
- Or
```bash
mysql -u your_username -p < data.sql
```
- Start the flask app, (cd to the handshake directory, very important!)
```bash
python -m server.app
```
**Usage**
- Your server API is now accessible on port 5000, http://localhost:5000/api/{endpoint}

# Setting up the frontend

- Use the terminal or command prompt and navigate the client directory
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
Below is the endpoints available in handshake:
- /api/signup: This endpoint signs up the user.

Method: POST
URL: localhost:5000/api/signup

**Mandatory Parameters:**

_{'firstname': firstname,
'lastname': lastname,
'email': email,
'phone_number': phone_number,
'password': password,
'confirm_password': confirm_password}_
**Response:**
```bash
{
'user_id': user.id
}
```
# Landing page
![Screenshot (20)](https://github.com/HandshakeOrg/handshake/assets/68060853/9de2d5ff-f839-4292-9484-8d7b87e341f2)
