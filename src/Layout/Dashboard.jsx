
import { NavLink, Outlet } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { FaHome, FaList, FaUsers } from "react-icons/fa";
import { RiAndroidFill } from "react-icons/ri";
import { GoCodeReview } from "react-icons/go";
import { BsBookmarks } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { IoBookmarks, IoMenu } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { MdContactPhone } from "react-icons/md";
import { ImSpoonKnife } from 'react-icons/im';
import UseCart from '../hooks/UseCart';
import UseAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
    
    const [cart] = UseCart();
    // const isAdmin = true;
    const [isAdmin] = UseAdmin();

    return (
        <div className='flex'>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            {/* dashboard sidebar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome> Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'>
                                        <ImSpoonKnife></ImSpoonKnife> Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList></FaList> Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/rmanageBookings'>
                                        <IoBookmarks></IoBookmarks> Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allUsers'>
                                        <FaUsers></FaUsers> All Users</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/home'>
                                        <FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'>
                                        <RiAndroidFill></RiAndroidFill> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <BsCart4></BsCart4> My Cart:{cart.length}</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <GoCodeReview></GoCodeReview> Add a Reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking'>
                                        <BsBookmarks></BsBookmarks> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared component */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salads'>
                            <IoMenu></IoMenu> Order Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <MdContactPhone></MdContactPhone> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;