import React from 'react';

const MemberProfile = ({member}) => {
    const {name, joiningDate, review, photoUrl} = member;
    return (
        <div>
            <div className="card bg-base-100 w-72 h-86 shadow-sm">
                <figure>
                    <img className='w-42 mt-6'
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