import React from 'react';
import MenuItem from '../../sharedPages/MenuItem';
import Cover from '../../sharedPages/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, backImg }) => {
    return (
        <div className='pt-5'>
            {
                backImg && <Cover backImg={backImg} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 mt-16 mb-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mx-auto flex items-center mt-10">Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;