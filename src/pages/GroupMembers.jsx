import React, { useEffect, useState } from 'react';
import MemberProfile from '../Components/MemberProfile';


const GroupMembers = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('https://hobby-hub-server.onrender.com/api/users').then(res => res.json()).then(data => {
            console.log('from members', data);
            setMembers(data);
        });
    }, [])

    const membersToShow = members.slice(2, 6)

    return (
        <div className=''>
            <h2 className="text-3xl  font-semibold mb-12 text-black dark:text-white">Users Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {membersToShow.map(member => <MemberProfile key={member._id} member={member}></MemberProfile>)}
            </div>

        </div>
    );
};

export default GroupMembers;