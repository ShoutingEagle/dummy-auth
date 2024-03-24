import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Auth() {

 const [state,setState] = useState({
  userName : '',
  password : ''
 }) 

 useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem('userData'))
  if(storedItems){
    console.log(' redirectering')

     navigate('/profile')
     return;
   }
 })

 

 const navigate = useNavigate();

 const handleClick = (e) => {
    e.preventDefault();
    


    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      username:state.userName,
      password:state.password,
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('userData',JSON.stringify({id : data.id , token :data.token}));
      navigate('/profile')
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
  
}



  return (
    <div className='container'>
      <div className='form'>

        <div className='heading'>Sign In</div>

        <div className='input-box'>
          <label>
          Username :
          </label>
          
        <input type='text' name='userName' onChange={(e) => setState({
          ...state,
          userName : e.target.value
        })}/>

        </div>
        
        
        <div className='input-box'>

        <label>
        Password :  
        </label>
          
        <input type='text' name='password' onChange={(e) => setState({
          ...state,
          password : e.target.value
        })}/>
        </div>
        
        
       
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default Auth





