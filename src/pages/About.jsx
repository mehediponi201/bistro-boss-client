import React from 'react';
import pic from '../assets/home/chef-service.jpg';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center justify-center mb-10' style={{
            backgroundImage:`url(${pic})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'500px'
        }}>
            <div className='text-center w-[90%] max-w-[1096px] bg-white bg-opacity-80 p-8 rounded'>
               <h4 className='text-3xl font-bold mb-4 text-gray-800'>Bistro Boss</h4>
                <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis 
                    praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
            
        </div>
    );
};

export default About;