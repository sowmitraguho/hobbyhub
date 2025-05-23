import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from './Firebase/AuthContext';

const UpdateGroup = () => {

    const {loggedInUser} = use(AuthContext);
    //const {displayName, email} = loggedInUser;

    const currentGroupData = useLoaderData();
   // console.log(currentGroupData, loggedInUser);

    const handleCreateGroup = (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const newGroupInfo = Object.fromEntries(formData.entries());
            console.log(newGroupInfo);
            // data send to mongodb
            fetch(`http://localhost:3000/groups/${currentGroupData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newGroupInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        Swal.fire({
                            title: "Group has been created SuccessFully!",
                            icon: "success",
                            draggable: true,
                            timer: 2000
                        });
                    }
                })
    
        }



    return (
        <div className='p-24 text-center space-y-4'>
            <h2 className="text-3xl font-semibold">Update Group</h2>
            <p>
                Start something exciting! Use the form below to create your own hobby group. Whether it's hiking, painting, coding, or anything else you're passionate about, this is the place to bring like-minded people together.

                Please fill in the required details to set up your group and let others know what it's all about.
            </p>
            <form onSubmit={handleCreateGroup}>
                <div className='p-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Group Name</label>
                            <input type="text" name='name' defaultValue={currentGroupData.name} className="input w-full" placeholder="Group Name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Hobby Category</label>
                            <select id="hobbyCategory" defaultValue={currentGroupData.hobbyCategory} name="hobbyCategory" className="input w-full" required>
                                <option value="">-- Select a Category --</option>
                                <option value="arts">Arts & Crafts</option>
                                <option value="photography">Photography</option>
                                <option value="fishing">Fishing</option>
                                <option value="cooking">Cooking</option>
                                <option value="music">Music</option>
                                <option value="sports">Sports & Fitness</option>
                                <option value="tech">Technology & Coding</option>
                                <option value="books">Books & Literature</option>
                                <option value="writing">Writings</option>
                                <option value="gaming">Gaming</option>
                                <option value="outdoors">Outdoor Activities</option>
                                <option value="other">Other</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">New Category</label>
                            <input type="text" name='newCategory' defaultValue={currentGroupData.newCategory} className="input w-full" placeholder="New Category Name if Your selected category is other" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Description</label>
                            <input type="text" name='description' defaultValue={currentGroupData.description} className="input w-full" placeholder="Group Description" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Meeting Location</label>
                            <input type="text" name='locatiopn' defaultValue={currentGroupData.locatiopn} className="input w-full" placeholder="Meeting Location" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Maximun Member</label>
                            <input type="number" name='maxMember' defaultValue={currentGroupData.maxMember} className="input w-full" placeholder="Maximun Member" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Start Date</label>
                            <input type="date" name='date' defaultValue={currentGroupData.date} className="input w-full" placeholder="Start Date" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Photo</label>
                            <input type="text" name='photoURL' defaultValue={currentGroupData.photoURL} className="input w-full" placeholder="Photo URL" />
                        </fieldset>

                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                        <label className="label">User Name</label>
                        <input type="text" name='userName' className="input w-full" readOnly defaultValue={loggedInUser?.displayName} placeholder="User Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                        <label className="label">User Email</label>
                        <input type="email" name='userEmail' readOnly defaultValue={loggedInUser?.email} className="input w-full" placeholder="User Email" />
                    </fieldset>
                    <button type='submit' className="btn btn-neutral w-full my-6">Create Group</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateGroup;