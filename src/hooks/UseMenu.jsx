// import React, { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseMenu = () => {
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data),
    //             setLoading(false)
    //         })
    // }, [])
    
    // Tanstack query
    const {data:menu = [],loading,refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:5000/menu')
            return res.data;
        }
    })
    return [menu, loading,refetch]
};

export default UseMenu;