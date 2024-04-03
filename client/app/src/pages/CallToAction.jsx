import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CallToAction.css';
function CallToAction() {
  const { user_id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    if (user_id) {
      fetch(`${BASE_URL}/listings/user/${user_id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUserInfo(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [user_id]);

  return (
    <div className='contact-main'>
      <h1>Contact the Advertiser</h1>
      {/* {error && <p>{error}</p>} */}
      {userInfo && (
        <div>
          <p>
            Name: {userInfo.firstname} {userInfo.lastname}
          </p>
          <p>Phone Number: {userInfo.phone_number}</p>
          <p>Email Address: {userInfo.email}</p>
          <p>City: {userInfo.city}</p>
          <p>State: {userInfo.state}</p>
        </div>
      )}
    </div>
  );
}

export default CallToAction;
