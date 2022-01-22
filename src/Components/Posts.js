import AddPost from './AddPost';
import {PostSingle} from './';
import {useState} from 'react'

const Posts = ({posts, setPosts, token, post}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = posts.filter(({title, description, location, price}) => {
    return description.toLowerCase().includes(searchTerm.toLowerCase()) || location.toLowerCase().includes(searchTerm.toLowerCase()) || title.toLowerCase().includes(searchTerm.toLowerCase()) || price.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  return <>
  <input type='text' placeholder = 'search Posts' value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    {token && <AddPost posts={posts} setPosts={setPosts} token={token} />}
    
    {filteredPosts && posts.length ? filteredPosts.map(post => {
        return (
          <PostSingle posts={posts} setPosts={setPosts} token={token} key={posts._id} post={post} /> 
        );})
        : <h5>No Posts to display</h5>
    }
  </>
}
  
export default Posts;