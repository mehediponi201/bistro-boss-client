import React from 'react';
import Banner from './Banner';
import Category from './Category';
import About from './About';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonial from './Testimonial';
import ContactNumber from './ContactNumber';
import ChefRecommend from './ChefRecommend';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <ContactNumber></ContactNumber>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;