import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userDetails,setUserDetails] = useState(null);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
    
  }


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    

      
        fetch(`https://dummyjson.com/users/${userData.id}`, {
          method: 'GET',
          headers: {
            'Authorization': userData.token,
          },
        })
        .then(res => res.json())
        .then(data => setUserDetails(data))
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
      
    }, []);

  return (
    <div className='profile-container'>

      {
        userDetails ? (
          <div>

            <button onClick={handleLogout}>Logout</button>
            <div className='user'> 
            <span>Welcome</span>
            <span>
              "{userDetails.firstName} {userDetails.maidenName} {userDetails.lastName}"
            </span>
               
            </div>

            <div className='image'>
              <img src={userDetails.image}/>
            </div>
          </div>
        
        ) : (null)

      }
      
      
      
      
    </div>
  );
}

export default Profile;


