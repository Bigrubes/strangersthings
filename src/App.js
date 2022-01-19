import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { callApi } from './api';
import './App.css'

import {
  AccountForm,
  AddPost,
  Home,
  Posts,
  MessageForm,
  PostSingle

} from './Components';


const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  console.log(posts);

  const handlePosts = async () => {
   const {data:{posts}} = await callApi({url:'/posts',token})
   if(posts){
     setPosts(posts)
   }
  }

  

  //run on initial render only
  useEffect(() => {
    //persistent login
    if(localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  },[])

  useEffect(() => {
    try {
      handlePosts();  
    } catch (error) {
      console.error(error);
    }
  }, [token]);
  return <>
   {token && <h2>Hello, {user.username}</h2>}
    <Link to="/"></Link> | 
    <Link to="/home">Home</Link> | 
    <Link to="/account/login">Login</Link> |
    <Link to="/posts">Posts</Link> |
    {token && <button onClick={() => {
      setToken('');
      localStorage.removeItem('token');
    }}>Log Out</button>}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/posts" element={ <Posts token={token} setPosts={setPosts} posts={posts} user={user} handlePosts={handlePosts} /> } />
      <Route path="/account/:method" element={ <AccountForm user={user} setUser={setUser} setToken={setToken} /> } />
      <Route path="/posts/:postId/Messages" element={<MessageForm token={token} setPosts={setPosts}/>} />
    </Routes>
  </>
}

export default App;
