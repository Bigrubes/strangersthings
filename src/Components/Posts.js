import React,{useState} from 'react';
import AddPost from './AddPost';
import {PostSingle} from './';

const Posts = ({posts, setPosts, token, post}) => {

  return <>
    {token && <AddPost posts={posts} setPosts={setPosts} token={token} />}
    {
      posts && posts.length 
        ? posts.map(post => {
        return (
          <PostSingle posts={posts} setPosts={setPosts} token={token} key={posts.id} post={post} /> 
        );})
        : <h5>No Posts to display</h5>
    }
  </>
}

export default Posts;