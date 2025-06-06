import React from 'react';
import { PiHandshake } from "react-icons/pi";
import { GiBalloons } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { MdPartyMode } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";
import ServiceCard from './ServiceCard';

const Services = () => {
    const allServices = [
        {
            title: 'Friendly Team',
            description: 'More than 200 teams',
            icon: <PiHandshake />
        },
        {
            title: 'Perfect Venues',
            description: 'The best and perfect venues',
            icon: <GiBalloons />
        },
        {
            title: 'Unique Scenerio',
            description: 'We think out of the box',
            icon: <FaGlassCheers />
        },
        {
            title: 'Unforgettable Time',
            description: 'We make you perfect event',
            icon: <MdPartyMode />
        },
        {
            title: '24/7 Hours Support',
            description: 'Anytime Anywhere',
            icon: <IoLogoWhatsapp />
        },
        {
            title: 'New & Brilliant Idea',
            description: 'We have million ideas',
            icon: <HiLightBulb />
        },
    ]
    return (
        <div className=''>
            <div className="upper-section flex flex-col-reverse md:flex-row gap-4">
                <div className="upper-left md:mr-6 flex-1">
                    <p className="text-gray-700 text-justify dark:text-white">
                        We are here to make your hobby as your favourite pastimes. We work so that you can enjoy your hobby. We're passionate about your passions. Our goal is to transform your hobby from something you do into something you savor—a cherished part of your day where you can relax, create, and simply enjoy.
                    </p>
                </div>
                <div className="upper-right flex-1">
                    <h3 className="text-gray-500 text-3xl font-semibold uppercase tracking-widest">We Are HobbyHub</h3>
                    <h1 className="text-5xl text-[#333] dark:text-white"> <span className='font-extrabold'>No. 1 </span> Event Management</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'>
                {allServices.map((item, index)=><ServiceCard key={index} item={item}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;