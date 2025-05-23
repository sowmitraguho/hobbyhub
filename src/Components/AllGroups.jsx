import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';

const AllGroups = () => {
    const allGroups = useLoaderData();
    return (
        <div className="p-12 text-center bg-[url('home-background.jpg')] bg-cover bg-center min-h-screen ">
            <h2 className="text-3xl font-semibold">All Groups</h2>
            <div className="p-12">
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                    allGroups.map(group=><GroupCard key={group._id} group={group} />)
                }
                </div>
            </div>
        </div>
    );
};

export default AllGroups;