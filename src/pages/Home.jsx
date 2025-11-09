import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../Components/GroupCard';
import { Typewriter } from 'react-simple-typewriter';
import GroupMembers from './GroupMembers';
import Services from './Services';
import LoaderSkeleton from '../Components/LoaderSkeleton/LoaderSkeleton';
import HeroSection from '../Components/HeroSection';
import FeaturedGroupsSection from '../Components/FeaturedGroup';

//bg-[url('https://i.ibb.co/jvKSBjDf/mjy15.jpg')] bg-no-repeat bg-cove

const Home = () => {
    const allGroups = useLoaderData();
    if (!allGroups) return <LoaderSkeleton />;
    //console.log(allGroups);
    const featuredGroups = allGroups?.slice(0, 6) || [];
    return (
        <div className="text-black">
            <h1 className='text-xl md:text-3xl text-center py-4 text-gray-600 font-semibold dark:text-green-500'>
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
            <HeroSection />
            <FeaturedGroupsSection featuredGroups={featuredGroups} />
            <div className="px-6 md:px-24 pb-12">
                <GroupMembers />
            </div>
            <div className="divider divider-success mx-20 dark:text-white text-2xl my-16">About Us</div>
            <div className="px-6 md:px-24 pb-12">
                <Services />
            </div>
        </div>
    );
};

export default Home;