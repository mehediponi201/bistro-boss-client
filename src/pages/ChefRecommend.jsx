import React from 'react';
import SectionTitle from '../sharedPages/SectionTitle';
import pic1 from '../assets/home/slide1.jpg';
import pic2 from '../assets/home/salad-2.jpg';

const ChefRecommend = () => {
    return (
        <div className='mb-20'>
            <SectionTitle subheading={"Should Try"} heading={"CHEF RECOMMENDS"}></SectionTitle>
            {/* card section */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {/* 1st card */}
                <div className="card bg-base-100  shadow-sm">
                    <figure className="px-10 pt-10">
                        <img src={pic1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className='w-[200px]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                {/* 2nd card */}
                <div className="card bg-base-100 w-90 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img src={pic2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className='w-[200px]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                {/* 3rd card */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img src={pic1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p className='w-[200px]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;