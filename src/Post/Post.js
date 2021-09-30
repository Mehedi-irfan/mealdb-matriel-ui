import { Link } from '@mui/material';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Post.css';
const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    console.log(props.post)
    const handleClick = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div className='post-container'>
            <h1>Serial No :- {id}</h1>
            <h2>Post Title :- {title}</h2>
            <p>Descripiton :- {body}</p>
            <button onClick={handleClick} className='see-btn'>See Details</button>
            <NavLink className='nav-btn' to={`/post/${id}`}> See More</NavLink>
        </div>
    );
};

export default Post;