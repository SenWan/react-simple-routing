import React from 'react';
import './Friend.css'
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetails = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <button onClick={showFriendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;