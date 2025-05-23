import React from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
    const groupInfo = useLoaderData();
    console.log(groupInfo);
    const { _id, name, hobbyCategory, description, photoURL, date, locatiopn, maxMember } = groupInfo;
    return (
        <div className="bg-[url('https://i.ibb.co/spF1J5nt/chang-duong-Sj0i-Mtq-Z4w-unsplash.jpg')] bg-cover bg-center min-h-screen p-12 text-center">
            
            <div className='p-12 bg-black/70 min-h-screen rounded-lg text-white'>
                <h2 className="text-5xl font-semibold mb-12">Group Details</h2>
                <div className=" ">
                    <div className=" flex flex-col lg:flex-row-reverse gap-12 justify-between ">
                        <img
                            src={photoURL}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className='text-left space-y-4 font-semibold'>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p>Categroy: <span className=' font-normal'>{hobbyCategory}</span> </p>
                            <p>
                                Group Description: <span className=' font-normal'>{description}</span> 
                            </p>
                            <p>maximum Member: <span className=' font-normal'></span> {maxMember}</p>
                            <p>Meeting Location: <span className=' font-normal'>{locatiopn}</span> </p>
                            <p>Join before: <span className=' font-normal'>{date}</span> </p>
                            <button className="btn btn-primary">Join Group</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;