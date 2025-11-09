import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../Components/GroupCard';
import { Typewriter } from 'react-simple-typewriter';
import GroupMembers from './GroupMembers';
import Services from './Services';
import LoaderSkeleton from '../Components/LoaderSkeleton/LoaderSkeleton';
import HeroSection from '../Components/HeroSection';
import FeaturedGroupsSection from '../Components/FeaturedGroup';
import HowItWorksSection from '../Components/HowItWorksSection';
import EventCategoriesSection from '../Components/EventCategoriesSection';
import StatisticsSocialProofSection from '../Components/StatisticsSocialProofSection';
import TestimonialsSuccessStoriesSection from '../Components/TestimonialsSuccessStoriesSection';
import CallToActionSection from '../Components/CallToActionSection';

//bg-[url('https://i.ibb.co/jvKSBjDf/mjy15.jpg')] bg-no-repeat bg-cove

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [featuredGroups, setFeaturedGroups] = useState([]);
    const allGroups = useLoaderData() || [];
    useEffect(() => {
        setLoading(true);
        if (allGroups.length > 0) setFeaturedGroups(allGroups?.slice(0, 6) || []);
        setLoading(false);
    }, [allGroups.length]);
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
            <HowItWorksSection />
            <EventCategoriesSection />
            <StatisticsSocialProofSection />
            <TestimonialsSuccessStoriesSection />
            <CallToActionSection />
        </div>
    );
};

export default Home;