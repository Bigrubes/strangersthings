const BASE_URL = "https://strangers-things.herokuapp.com/api/2110-FTB-PT-WEB-PT"

export const callApi = async ({url, method, token, body,}) => {
	try{
	const options = {
	  method: method ? method.toUpperCase() : "GET" ,
	  headers:{
		'Content-Type':'application/json',
	  },
	  body:JSON.stringify(body)
	}
	if(token){
	  options.headers['Authorization'] = `Bearer ${token}`
	}
	const response = await fetch(BASE_URL + url,options);
	const data = await response.json();
	
	return data;
  }
	catch(error){
	  console.error(error)
	}
  }

export const fetchPosts = async () => {
	try {
		const response = await fetch(`${BASE_URL}/posts`);
		const { data: { posts } } = await response.json();
		return posts;
	} catch (error) {
		console.error(error);
	}
}

export const login = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/users/login`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: {
					username,
					password,
				}
			})
		})
		console.log(response);
		const result = await response.json();
		console.log(result);
		
		// const {data: {token} } = await response.json();
		// return token;
	} catch (error) {
		console.error(error);
	}
}

export const register = async (username, password) => {
	try{
	const response = await fetch(`${BASE_URL}/users/register`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user: {
				username,
				password,
			}
		})
	})
	const { data: {token, message} } = await response.json();
	return token, message;

}catch (error){
	console.error(error)
}
}
export const getUser = async (token) => {
	const response = await fetch(`${BASE_URL}/users/me`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
	})
	const { data: userObject } = await response.json();
	return userObject;
}
export const newPost = async (token, postObject) => {
	try {
	  console.log('postObject', postObject)
	  const response = await fetch(`${BASE_URL}/posts`, {
		method: "POST",
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(postObject)
	  })
	  const {data: {post: newPost}} = await response.json();
	  return newPost;
	} catch (err) {
	  console.error(err);
	}
  }

  export const deletePost = async (token, POST_ID) => {
	try {
	  await fetch(`${BASE_URL}/posts/${POST_ID}`, {
		method: 'DELETE',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
		}
	  })
	} catch (err) {
	  console.error(err);
	}
  }


export const addMessage = async (token, id,content) => {
	try{
	const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
	  method: "POST",
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${token}`
	  },
	  body: JSON.stringify({ 
		message:{
		content
	  }
	   })
	});
	const data = await response.json();
	return data;
  }catch(error){
	console.error(error)
  }
  }