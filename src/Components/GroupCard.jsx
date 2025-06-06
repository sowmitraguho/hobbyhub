import React from 'react';
import { useNavigate } from 'react-router';

const GroupCard = ({ group }) => {

    let navigate = useNavigate();
    //console.log(group);
    const { _id, name, hobbyCategory, description, photoURL, date } = group;

    const handleViewDetails = (id) => {
        navigate(`/group/${id}`)
    }
    return (
        <div >
            <div className="flex flex-col justify-between max-w-sm h-140 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <figure>
                    <img className='w-full h-65'
                        src={photoURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}
                        <div className="badge badge-primary tracking-wide ml-2">{hobbyCategory}</div>
                    </h2>
                    <p className='font-normal text-gray-700 dark:text-gray-400 '>About Group: {description}</p>
                    
                    <div className="card-actions justify-start">
                        <p className='font-normal text-gray-700 dark:text-gray-400'>Last Date to Join: {date}</p>
                        <button onClick={()=> handleViewDetails(_id)} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;