import React, { useEffect, useState } from 'react';
import MemberProfile from './MemberProfile';


const GroupMembers = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users').then(res => res.json()).then(data => {
            console.log('from members', data);
            setMembers(data);
        });
    }, [])

    const membersToShow = members.slice(2, 6)

    return (
        <div className="p-24 bg-gray-400 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230626/pngtree-template-for-3d-review-designs-image_3683798.jpg')]">
            <h2 className="text-5xl text-black text-center font-bold py-2 my-6 bg-white rounded-2xl">Users Review</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
                {membersToShow.map(member => <MemberProfile key={member._id} member={member}></MemberProfile>)}
            </div>
            
        </div>
    );
};

export default GroupMembers;