import React, { useState } from 'react';
import PostForm from './PostForm';
import { callApi } from '../api';

const AddPost = ({fetchPosts, setPosts, token, posts}) => {
  const blankPost = {location: '', description: '', title:'', price:''};
  const [post, setPost] = useState({});


  const handleAdd = async (event) => {
    try {
      event.preventDefault();
      const { data: { post: newPost } } = await callApi({
        url: '/posts',
        method: 'post',
        body: { post },
        token
      })
      setPosts([...posts, newPost]);
      setPost(blankPost);
    } catch (error) {
      console.error(error);
    }
  }

  return <>
    <h2>Add Post</h2>
    <PostForm handleSubmit={handleAdd} post={post} setPost={setPost}/>
  </>
}

export default AddPost;