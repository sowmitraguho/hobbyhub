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
            <div className="card bg-base-100 w-96 h-96 shadow-sm">
                <figure>
                    <img className='w-96'
                        src={photoURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}
                        <div className="badge badge-secondary">{hobbyCategory}</div>
                    </h2>
                    <p>{description}</p>
                    <p>Last Date to Join: {date}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handleViewDetails(_id)} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;