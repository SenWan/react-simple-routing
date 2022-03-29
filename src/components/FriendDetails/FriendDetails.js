import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {details} = useParams();
    return (
        <div>
            {/* friendDetails route theke dynamically pawar jnno. ekhane friendDetals button e click krle dynamically number gula dekhabe */}
            <h2>Details Of Friends: {details}</h2>
        </div>
    );
};

export default FriendDetails;