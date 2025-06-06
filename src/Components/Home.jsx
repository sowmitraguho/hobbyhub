import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';
import { Typewriter } from 'react-simple-typewriter';
import Carousel from './Carousel';
import GroupMembers from './GroupMembers';

const Home = () => {
    const allGroups = useLoaderData();
    //console.log(allGroups);
    const featuredGroups = allGroups?.slice(0, 6) || [];
    return (
        <div className="">
            <h1 className='text-3xl text-center py-4'>
                Life is simple{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Eat', 'Sleep', 'Follow Your Hobby!']}
                        loop={20}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        
                    />
                </span>
            </h1>
            <div className="carousel mb-0">
                <Carousel/>
            </div>
            <div className="bg-[url('home-background.jpg')] bg-cover bg-center min-h-screen p-24 mt-[-6px]">
                <h2 className="text-2xl font-semibold mb-6 text-red-950">Featured Groups</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        featuredGroups.map(group => <GroupCard key={group._id} group={group} />)
                    }
                </div>
            </div>
            <div>
                <GroupMembers/>
            </div>
        </div>
    );
};

export default Home;