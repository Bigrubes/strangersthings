// import PostForm from './PostForm';
// import AddPost from './AddPost';
// import  PostSingle  from './PostSingle';
// import { useParams, useNavigate } from "react-router";
// import { fetchPosts } from "../api";
// import {useState, useEffect} from 'react'


// const Posts = ({token, posts, setPosts, post}) => {
// 	// const [posts, setPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [postId, setPostId] = useState(null)
//   const navigate = useNavigate();

// const filteredPosts = posts.filter(({title, description, location, price}) => {
//   return description.toLowerCase().includes(searchTerm.toLowerCase()) || location.toLowerCase().includes(searchTerm.toLowerCase()) || title.toLowerCase().includes(searchTerm.toLowerCase()) || price.toLowerCase().includes(searchTerm.toLowerCase())
// })
// 	// const handlePosts = async () => {
// 	// 	try {
// 	// 		const newPosts = await fetchPosts()
// 	// 		setPosts(newPosts)
// 	// 	} catch (error) {
// 	// 		console.error(error);
// 	// 	}
// 	// }

// 	useEffect(() => {
// 		fetchPosts().then((posts) => {
// 			setPosts(posts);
// 		}).catch((error) => {
// 			console.error(error);
// 		})
// 		// handlePosts();
// 		// IIFE
// 		// (async ()=> {
// 		// 	try {
// 		// 		const newPosts = await fetchPosts()
// 		// 		setPosts(newPosts)
// 		// 	} catch (error) {
// 		// 		console.error(error);
// 		// 	}
// 		// })();
// 	}, [])

// 	return (
// 		<>
// 		<input type='text' placeholder = 'search Posts' value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
// 		<AddPost token={token} setPosts={setPosts} fetchPosts={fetchPosts}/>
// 		<PostSingle token={token} setPosts={setPosts} fetchPosts={fetchPosts}/>
// 		<div className="posts">
// 			{filteredPosts.length > 0 &&
// 			filteredPosts.map(({_id, description, title, location, price}) => {
// 				return (
// 					<>
// 					<h3 className="title-post" key={_id}>{title}</h3>
// 					<div className="description-post">{description}</div>
// 					<div className="price-post">{price}</div>
// 					<div className="location-post">{location}</div>		
// 					</>
// 				)
			
// 			})}
// 		</div>
// 		</>
// 	)
// }

// export default Posts;


import React,{useState} from 'react';
import PostForm from './PostForm';
import AddPost from './AddPost';
import { callApi } from '../api';

import {
  PostSingle,
} from './';

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
