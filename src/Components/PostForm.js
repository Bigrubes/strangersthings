import React, { useState } from 'react';

const PostForm = ({post, setPost, handleSubmit}) => {
  
	return (
	<form onSubmit={handleSubmit} >
		<input value={post.title} placeholder='Title' onChange={(event) => {setPost({...post, title: event.target.value})}} />
		<input value={post.description} placeholder='Description' onChange={(event) => {setPost({...post, description: event.target.value})}} />
        <input value={post.price} placeholder='Price' onChange={(event) => {setPost({...post, price: event.target.value})}} />
        <input value={post.Location} placeholder='Location' onChange={(event) => {setPost({...post, location: event.target.value})}} />
		<button>Submit</button>
	</form>
	)
}

export default PostForm;