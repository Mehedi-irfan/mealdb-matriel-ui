import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './About.css';

const About = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
           <h2>Latest Post :- {posts.length} </h2> 
          <div className='posts-container'>
          {
               posts.map(post => <Post
                key={post.id}
                post={post}
                
               ></Post>)
           }
          </div>
        </div>
    );
};

export default About;