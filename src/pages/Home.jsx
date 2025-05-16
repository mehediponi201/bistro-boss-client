import React from 'react';
import Banner from './Banner';
import Category from './Category';
import About from './About';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu> 
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;