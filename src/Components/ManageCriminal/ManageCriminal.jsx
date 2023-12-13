import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";
const ManageCriminal = () => {
   
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://personal123-blond.vercel.app/criminal')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const refetch = () => {
        // Refetch data after deletion if needed
        fetch('https://personal123-blond.vercel.app/criminal')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handelDelete = id => {
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
                axios.delete(`https://personal123-blond.vercel.app/criminal/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            console.log(res.data.deletedCount);
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting data:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the file.",
                            icon: "error"
                        });
                    });
            }
        });
    };
    return (
        <div>
        <div className='flex justify-evenly'>
            <h2 className='text-2xl'>Items: </h2>
           
           
        </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>CriminalName</th>
                       
                        <th>ID</th>
                        <th>Location</th>
                      
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {user.name}
                            </td>
                           

                            <td>{user.caseId}</td>
                             <td>{user.location}</td>
                            
                            <th>
                                <button onClick={() => handelDelete(user._id)} className="btn btn-ghost "><FaTrashAlt className='text-2xl font-bold' /></button>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    </div>
    );
};

export default ManageCriminal;