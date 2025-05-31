import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UseCart from '../../hooks/UseCart';

const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = UseCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart to the database
            const cartItem = {
                menuItem: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} added to cart successfully!`,
                            icon: "success",
                            draggable: true
                        });
                        // refetch the cart to update the cart length without refresh the page
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login to add cart?",
                text: "You won't be able to add cart without login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location?.pathname } });
                }
            });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <p className='absolute right-0 bg-slate-900 text-white mt-5 mr-3 px-2'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-yellow-400">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;