import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Home = ({ token}) => {
  const [user, setUser] = useState({});
  
  return <>
    <h1>Welcome to Stranger's Things</h1>
    <h4>{user?.username && <div>Logged in as {user.username}</div>}
    { user?.username && <Link to="/profile">View Profile</Link>}
    </h4>
  </>
}


export default Home;