import React, { useState } from 'react';
import Cover from '../../sharedPages/Cover';
import pic1 from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import OrderTab from './OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';


const Order = () => {
    
    const categories = ['salads','pizza','soups','desserts','drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category); 

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    const drinksItem = menu.filter(item => item.category === 'drinks');
    const dessertItem = menu.filter(item => item.category === 'dessert');
    const pizzaItem = menu.filter(item => item.category === 'pizza');
    const soupItem = menu.filter(item => item.category === 'soup');
    const saladItem = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover backImg={pic1} title="Order Food"></Cover>
            <Tabs className="text-center mt-10 mb-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soupItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessertItem}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinksItem}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;