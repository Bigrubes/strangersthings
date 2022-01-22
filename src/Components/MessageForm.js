import { useParams } from "react-router-dom";
import { useState } from "react";
import { addMessage, callApi } from "../api";
import { useNavigate } from 'react-router';

const MessageForm = ({token, setPosts}) => {
	const {postId} = useParams();
	// console.log(params);
	const [content, setContent] = useState('');
	const navigate = useNavigate();
	

	const handleMessage = async (e) => {
		e.preventDefault();
		try {
			console.log('token', token)
			const response = await addMessage(token, postId, content);
			const {data:{posts: newPosts}} = await callApi({
                url:'/posts',
                token
            });
			// const data = await response.json();
			setPosts(newPosts);
			// console.log(data);
			console.log(response)
		}	catch (error) {
			console.error(error);
		}
	}

	return (

		<form onSubmit={handleMessage}>
			<h2>Message Form</h2>
			<label htmlFor="message-input">Message: </label>
			<input value={content} onChange={(e)=> { 
				setContent(e.target.value)}} id="message-input"/>
			<button>submit</button>
		</form>

	)
}

export default MessageForm;