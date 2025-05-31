import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { HiMiniUsers } from 'react-icons/hi2';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/users',
                // start section for JWT
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                })
            // End section for JWT
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axios.patch(`http://localhost:5000/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: `${user.name} is admin now!`,
                        icon: "success",
                        draggable: true
                    });
                }
            })
        refetch();
    }

    const handleDelete = id => {
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
                axios.delete(`http://localhost:5000/users/${id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                })
                    .then(res => {
                        if (res.data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    return (
        <div>
            <div className='flex justify-evenly mb-5'>
                <h4 className='text-2xl'>All Users</h4>
                <h4 className='text-2xl'>Total Users:{users.length}</h4>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin'
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg">
                                                <HiMiniUsers></HiMiniUsers>
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg">
                                        <MdOutlineDeleteOutline></MdOutlineDeleteOutline>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;