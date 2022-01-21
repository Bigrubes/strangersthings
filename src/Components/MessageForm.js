import { useParams } from "react-router-dom";
import { useState } from "react";
import { addMessage, callApi } from "../api";

const MessageForm = ({token, setPosts}) => {
	const {postId} = useParams();
	// console.log(params);
	const [content, setContent] = useState('');
	

	const handleMessage = async (e) => {
		e.preventDefault();
		try {
			await addMessage(token, postId, content);
			const {data:{posts: newPosts}} = await callApi({
                url:'/posts',
                token
            });
			setPosts(newPosts);
		}	catch (error) {
			console.error(error);
		}
	}

	return (

		<form onSubmit={handleMessage}>
			<h2>Comment Form</h2>
			<label htmlFor="message-input">Message: </label>
			<input value={content} onChange={(e)=> { setContent(e.target.value)}} id="message-input"/>
			<button>submit</button>
		</form>

	)
}

export default MessageForm;