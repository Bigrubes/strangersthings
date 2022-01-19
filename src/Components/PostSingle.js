import React from 'react';
import { deletePost } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import './postSingle.css'

const PostSingle = ({post, token, children, posts, setPosts, newPosts}) => {
  //children only goes one level
  //if multiple levels  are needed to do drilldown
  //use the useContext hook;
  // const {post, token, children, posts, setPosts, newPosts} = props;
  const navigate = useNavigate();
  const params = useParams()
  
  const handleDelete = async () => {
    try {
      await deletePost(token, post.id); //the specific fetch call only updates the backend through a frontend event such as a click
      const newPosts = posts.filter((element) => {
        return element.id !== post.id;
      });
      setPosts(newPosts);

    } catch (error) {
      console.error(error);
    }
  };

  
  return post 
    ? <div style={{margin: '.2rem'}}>
        <h5>
          Location: {post.location}
        </h5>
        <div>
          Description: {post.description}
          <button>delete</button>
        </div>
        {post.isAuthor && <button onClick={handleDelete}>DELETE</button>}
        {!post.isAuthor && <button onClick={() => {navigate(`/posts/${post.id}/messages`)}}>Message</button>}
        {post.messages.map((elem) => {
          return (
            <div>
              {elem.fromUser.username} : {elem.content}
            </div>
          )
        })}
      </div>
    : ''
}

export default PostSingle;

