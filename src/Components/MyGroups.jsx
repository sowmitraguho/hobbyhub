import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import GroupCard from './GroupCard';

const MyGroups = () => {
    const myGroups = useLoaderData();

    const navigate = useNavigate();
    //console.log(myGroups);
    return (
        <div className="p-12 text-center bg-[url('home-background.jpg')] bg-cover bg-center min-h-screen ">
            <h2 className="text-3xl font-semibold">My Groups</h2>
            <div className="p-12">
                <div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Last Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                         <tbody>
                        {
                            myGroups.map(group => 
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={group.photoURL}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{group.name}</div>
                                                    <div className="text-sm opacity-50">{group.hobbyCategory}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            
                                            <span className="badge badge-ghost badge-sm">{group.description}</span>
                                        </td>
                                        <td>{group.date}</td>
                                        <th className='grid gap-1'>
                                            <button onClick={() => navigate(`updategroup/${group._id}`)} className="btn btn-neutral btn-sm">Update</button>
                                            <button className="btn btn-neutral btn-sm">Delete</button>
                                        </th>
                                    </tr>)
                        }</tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default MyGroups;