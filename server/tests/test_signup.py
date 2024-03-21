import unittest
import requests

class TestSignUpPage(unittest.TestCase):
    """This class should test our signup page if it works properly"""

    def test_signUp(self):
        """Test that the signup works well when the user inputs correct details"""
        data = {
            'firstname': 'sdominic',
            'lastname': 'sRaymond',
            'email': 'aymond@gmail.com',
            'password': '112345',
            'confirm_password': '11345',
            'phone_number': '233455632'
        }
        r = requests.post('http://localhost:5000/api/signup', data=data)
        da = r.json()
        # self.assertEqual(da.get('success'), True)
        # self.assertDictEqual(da, {'error': 'email already taken'})
        # self.assertDictEqual(da, {'error': 'phone number already taken'})
        # self.assertDictEqual(
        #     da, {'error': 'Your password and confirm_password fields needs to be the same'})
        # self.assertEqual(r.status_code, 403)
