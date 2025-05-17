import React, { useState } from 'react';
import Cover from '../../sharedPages/Cover';
import pic1 from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';


const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu();
    const offeredItem = menu.filter(item => item.category === 'offered');
    const dessertItem = menu.filter(item => item.category === 'dessert');
    const pizzaItem = menu.filter(item => item.category === 'pizza');
    const soupItem = menu.filter(item => item.category === 'soup');
    const saladItem = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Cover backImg={pic1} title="Order Food"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;