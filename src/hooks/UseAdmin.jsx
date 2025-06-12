import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const UseAdmin = () => {

    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            // const res = await axios.get(`https://bistro-boss-server-f217.onrender.com/users/admin/${user?.email}`)
             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading];
};
export default UseAdmin;

// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthContext';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';

// const UseAdmin = () => {
//     const { user, loading } = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();

//     const { data: isAdmin, isPending: isAdminLoading } = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         enabled: !loading && !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data?.admin;
//         }
//     });

//     return [isAdmin, isAdminLoading];
// };

// export default UseAdmin;