import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import GroupCard from './GroupCard';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const myGroups = useLoaderData();
    // console.log('my groups',myGroups);
    const navigate = useNavigate();

    const handleDeleteGroup = (id) => {
        //console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hobby-hub-server.onrender.com/groups/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })



            }
        });
    }



    return (
        <div className="p-12 text-center bg-[url('home-background.jpg')] bg-cover bg-center min-h-screen ">
            <h2 className="text-3xl font-semibold">My Groups</h2>
            {
                (myGroups.length) ? <div className="lg:p-12">
                    <div>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th className='hidden md:table-cell'>Description</th>
                                    <th className='hidden md:table-cell'>Last Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myGroups.map(group =>
                                        <tr key={group._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={group.photoURL}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{group.name}</div>
                                                        <div className="text-sm opacity-50">{group.hobbyCategory}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='hidden md:table-cell'>

                                                <span className="badge badge-ghost badge-sm">{group.description}</span>
                                            </td>
                                            <td className='hidden md:table-cell'>{group.date}</td>
                                            <th className='grid gap-1'>
                                                <button onClick={() => navigate(`/updategroup/${group._id}`)} className="btn btn-neutral btn-sm">Update</button>
                                                <button onClick={() => handleDeleteGroup(group._id)} className="btn btn-neutral btn-sm">Delete</button>
                                            </th>
                                        </tr>)
                                }</tbody>
                        </table>
                    </div>
                </div> :
                    <div>
                        <div className="hero min-h-96">
                            <div className="hero-content text-center">
                                <div className="">
                                    <h1 className="text-xl md:text-5xl font-bold mb-12">You have not created any group yet!!!</h1>
                                    
                                    <Link to='/creategroup' className='btn btn-primary'>Create A Group</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    );
};

export default MyGroups;