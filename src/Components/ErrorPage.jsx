import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <>
       
        <div className='flex flex-col md:justify-center items-center max-h-screen'>
            <img className='w-full h-112' src='https://media.geeksforgeeks.org/wp-content/uploads/20230802153215/Error-404.png' alt="" />
            {/* <h2 className="text-red-300 text-4xl font-bold mb-8">404 Page Not Found</h2> */}
            <Link to={'/'} className='btn btn-info bg-blue-500 px-5 py-2 text-white font-bold rounded mt-6'>Back To Home</Link>
        </div>
        </>
    );
};

export default ErrorPage;