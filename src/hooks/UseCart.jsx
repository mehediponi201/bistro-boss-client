import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const UseCart = () => {
    const { user } = useContext(AuthContext);
    // tanstack query
    const { refetch,data : cart=[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://bistro-boss-server-f217.onrender.com/carts?email=${user.email}`)
            return res.data
        }
    });
    return [cart,refetch]
};

export default UseCart;