import React from 'react';
import MenuItem from '../../sharedPages/MenuItem';
import Cover from '../../sharedPages/Cover';

const MenuCategory = ({ items,title,backImg}) => {
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
        </div>
    );
};

export default MenuCategory;