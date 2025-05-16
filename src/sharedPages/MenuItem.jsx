import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div>
                <h3>{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <h3 className='text-yellow-600'>${price}</h3>
        </div>
    );
};

export default MenuItem;