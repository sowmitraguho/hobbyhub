import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';

const Home = () => {
    const allGroups = useLoaderData();
    //console.log(allGroups);
    
    return (
        <div className="">
            <h1 className="text-3xl">This is Home</h1>
            <div className="bg-[url('home-background.jpg')] bg-cover bg-center min-h-screen p-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allGroups.map(group=><GroupCard key={group._id} group={group} />)
                }
            </div>
        </div>
    );
};

export default Home;