import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const UseAdmin = () => {

    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading = false } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            // const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`)
             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading];
};
export default UseAdmin;