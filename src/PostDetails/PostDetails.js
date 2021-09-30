import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import './PostDetails.css';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const history = useHistory();
    const {id, title, body} = post
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    const postStyle ={
        border :"4px solid crimson",
        width : '700px',
        margin : '0 auto',
        padding : '20px',
        borderRadius :'10px'
    }
    const handleAllPost = () => {
        history.push('/About');
    }
    return (
        <div>
            <h1>Post Details was comming sooon :- {postId}</h1>
            <div style={postStyle}>
            <h2>Serial No :- {id}</h2>
            <h3>Title :- {title}</h3>
            <p>Description :- {body}</p>
            <button onClick={handleAllPost} className='allPost-btn'>See All Post</button>
            </div>
        </div>
    );
};

export default PostDetails;