import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [postId])
    return (
        <div className='postDetails'>
            <h4>This is post details: {postId}</h4>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;