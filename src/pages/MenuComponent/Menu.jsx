import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../sharedPages/Cover';
import img1 from '../../assets/menu/banner3.jpg';
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../sharedPages/SectionTitle';
import MenuCategory from './MenuCategory';
import img2 from '../../assets/menu/dessert-bg.jpeg';
import img3 from '../../assets/menu/pizza-bg.jpg';
import img4 from '../../assets/menu/soup-bg.jpg';
import img5 from '../../assets/menu/salad-bg.jpg';

const Menu = () => {

    const [menu] = UseMenu();
    const offeredItem = menu.filter(item => item.category === 'offered');
    const dessertItem = menu.filter(item => item.category === 'dessert');
    const pizzaItem = menu.filter(item => item.category === 'pizza');
    const soupItem = menu.filter(item => item.category === 'soup');
    const saladItem = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover backImg={img1} title="our menu"></Cover>
            <div className='mt-10'>
                <SectionTitle subheading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            </div>
            <MenuCategory items={offeredItem}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessertItem} backImg={img2} title="desserts"></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizzaItem} backImg={img3} title="pizza"></MenuCategory>
            {/* salads */}
            <MenuCategory items={saladItem} backImg={img4} title="soups"></MenuCategory>
            {/* soups */}
            <MenuCategory items={soupItem} backImg={img5} title="salads"></MenuCategory>
        </div>
    );
};

export default Menu;