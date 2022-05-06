import axios from 'axios';
import React, { useState, useEffect } from 'react'

function EffectCounterFunctional() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({ id: 1 });
    const [postId, setPostId] = useState(1);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            }).catch(({ message }) => {
                setPosts([{ id: 'Error', title: message }]);
            });
    }, []);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
            .then(response => setPost(response.data))
            .catch(({ message }) => setPost({
                id: post.id,
                title: 'Error',
                body: message,
            }))
    }, [post.id]);
    return (
        <div>
            <p>EffectCounterFunctional</p>
            <input type="number" value={postId} onChange={({ target: { value } }) => { setPostId(value) }} />
            <button onClick={() => setPost({ id: postId })}>Fetch Post</button>
            <p>Post ID {post.id}</p>
            <p>Post Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <table style={{ margin: '0 auto' }}>
                <thead>
                    <tr>
                        <td>Post-ID</td>
                        <td>Post-Title</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (<tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default EffectCounterFunctional