import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='w-3/12 text-center mx-auto mb-10'>
           <p className='text-yellow-600 mb-2'>---{subheading}---</p>
           <h3 className='text-3xl border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;