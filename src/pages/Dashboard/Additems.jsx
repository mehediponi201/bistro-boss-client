import React from 'react';
import SectionTitle from '../../sharedPages/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hoisting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;

const Additems = () => {
    const { register, handleSubmit, reset } = useForm();
    // const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image: data.image[0] }
        const res = await axios.post(image_hoisting_api, imgFile, {
            // const res = await axios.post(`https://bistro-boss-server-f217.onrender.com/`,image_hoisting_api, imgFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        console.log(res.data);
        if (res.data.success) {
            // send the menu item into backend
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axios.post('https://bistro-boss-server-f217.onrender.com/menu', menuItem)
            console.log(menuRes.data);
            reset();
            if (menuRes.data.insertedId) {
                Swal.fire({
                    title: "Menu Item inserted successfully!",
                    icon: "success",
                    draggable: true
                });
            }
        }
    }
    return (
        <div>
            <SectionTitle heading="ADD AN ITEM" subheading="What's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe Name */}
                    <div className='my-4'>
                        <legend className="fieldset-legend">Recipe Name</legend>
                        <input type="text" className="input w-full" placeholder="Recipe Name" {...register('name', { required: true })} />
                    </div>
                    <div className='flex gap-6 w-full my-4'>
                        {/* category */}
                        <div className='flex-1'>
                            <legend className="fieldset-legend">Category </legend>
                            <select {...register("category", { required: true })} defaultValue="default" className="select w-full">
                                <option disabled value="default" >Select a Category</option>
                                <option>salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Desert</option>
                                <option>Drink</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className='flex-1'>
                            <legend className="fieldset-legend">Price</legend>
                            <input type="number" className="input w-full" placeholder="Price" {...register('price', { required: true })} />
                        </div>
                    </div>
                    {/* recipe details */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Recipe Details*</legend>
                        <textarea {...register('recipe', { required: true })} className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
                    </fieldset>
                    {/* file input */}
                    <div>
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-ghost my-4" />
                    </div>
                    <button className='btn'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Additems;