import React from 'react';
import SectionTitle from '../sharedPages/SectionTitle';
import featuredPic from '../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='mb-10 featured-item bg-fixed text-white pt-5'>
            <SectionTitle subheading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className='md:flex justify-center items-center px-36 pt-5 pb-20 bg-slate-600 opacity-50'>
                <div>
                    <img className='rounded-lg' src={featuredPic} alt="" />
                </div>
                <div className='md:ml-10 space-y-3'>
                    <h4 className='text-2xl'>March 20, 2023</h4>
                    <p className='text-2xl'>WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                        Eaque repellat recusandae ad laudantium tempore.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;