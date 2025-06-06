import React from 'react';

const ServiceCard = ({item}) => {
    const {title, description, icon} = item;
    return (
        <div className='p-10 flex items-center gap-4 hover:bg-amber-600 text-gray-700 hover:text-white dark:text-white'>
            <div className="left text-5xl">
                {icon}
            </div>
            <div className="right hover:text-white">
                <h2 className='text-2xl font-bold'>{title}</h2>
                <h4 className=''>{description}</h4>
            </div>
        </div>
    );
};

export default ServiceCard;