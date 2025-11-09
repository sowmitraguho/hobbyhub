const MemberProfile = ({member}) => {
    const {name, joiningDate, review, photoUrl} = member;

    //bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700

    // border border-gray-200 dark:bg-white dark:text-black
    return (
        <div>
            <div className="card bg-base-200 w-full md:w-66 h-76 shadow-xl border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-200">
                <figure>
                    <img className='w-36 mt-6'
                        src={photoUrl}
                        alt="User" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        
                    </h2>
                    <div className="badge badge-secondary">{joiningDate}</div>
                    <p>{review}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;