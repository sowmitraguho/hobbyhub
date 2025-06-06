import React, { useEffect, useState } from 'react';
import MemberProfile from './MemberProfile';


const GroupMembers = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('https://hobby-hub-server.onrender.com/users').then(res => res.json()).then(data => {
            console.log('from members', data);
            setMembers(data);
        });
    }, [])

    const membersToShow = members.slice(2, 6)

    return (
        <div>
            <h2 className="text-5xl text-gray-950 text-center font-bold py-2 mb-20 rounded-2xl dark:text-white">Users Review</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
                {membersToShow.map(member => <MemberProfile key={member._id} member={member}></MemberProfile>)}
            </div>
            
        </div>
    );
};

export default GroupMembers;