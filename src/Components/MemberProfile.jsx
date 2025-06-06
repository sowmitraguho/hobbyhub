import React from 'react';

const MemberProfile = ({member}) => {
    const {name, joiningDate, review, photoUrl} = member;
    return (
        <div>
            <div className="card bg-base-200 w-66 h-76 shadow-xl border border-gray-200 dark:bg-white dark:text-black">
                <figure>
                    <img className='w-36 mt-6'
                        src={photoUrl}
                        alt="User" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        
                    </h2>
                    <div className="badge badge-secondary">{joiningDate}</div>
                    <p>{review}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;