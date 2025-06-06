import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';

//bg-[url('home-background.jpg')] bg-cover bg-center 

const AllGroups = () => {
    const allGroups = useLoaderData();
    return (
        <div className="p-6 lg:p-12 text-center min-h-screen ">
            <h2 className="text-3xl font-semibold dark:text-white mb-2">All Hobby Groups</h2>
            <div className="md:p-4 lg:px-12">
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                    {
                    allGroups.map(group=><GroupCard key={group._id} group={group} />)
                }
                </div>
            </div>
        </div>
    );
};

export default AllGroups;