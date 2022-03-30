import React, { useEffect, useState } from 'react';
import './FriendDetails.css'
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    // const params = useParams();
    // destructuring
    const {details} = useParams();
    const [friend, setFriend] = useState({});

     useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${details}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [details]);
    return (
        <div className='friendDetails'>
            {/* friendDetails route theke dynamically pawar jnno. ekhane friendDetals button e click krle dynamically number gula dekhabe */}
            <h2>Details Of Friends: {details}</h2>
            <h2>Name: {friend.name}</h2>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p>City: {friend.address?.city}</p>
            <p>Lat: {friend.address?.geo.lat}</p>
        </div>
    );
};

export default FriendDetails;