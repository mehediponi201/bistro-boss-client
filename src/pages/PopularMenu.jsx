import React, { useEffect, useState } from 'react';
import SectionTitle from '../sharedPages/SectionTitle';
import MenuItem from '../sharedPages/MenuItem';

const PopularMenu = () => {

    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])

    return (
        <div className='mb-10'>
            <SectionTitle
                subheading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-5'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div> 
             <button className="btn btn-outline border-0 border-b-4 mx-auto flex items-center mt-10">View Full Menu</button>
        </div>
    );
};

export default PopularMenu;