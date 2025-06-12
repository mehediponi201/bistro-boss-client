import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseCart from "../../hooks/UseCart";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [secretClient, setSecretClient] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [cart, refetch] = UseCart();
    const { user } = useContext(AuthContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    // server er shate client er link up
    useEffect(() => {
        const paymentData = async () => {
            const res = await axios.post('https://bistro-boss-server-f217.onrender.com/create-payment-intent', { price: totalPrice })
            console.log(res.data.clientSecret);
            setSecretClient(res.data.clientSecret)
        }
        paymentData();
    }, [])
    // End of server er shate client er link up    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(secretClient, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now, save the payment histroy in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(), // use utc formet, use korbo momemt.
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuItem),
                    status: 'pending',
                    transactionId: paymentIntent.id
                }
                const res = await axios.post('https://bistro-boss-server-f217.onrender.com/payments', payment)
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Money transaction success!",
                        icon: "success",
                        draggable: true
                    });
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !secretClient} className="btn btn-primary my-2" type="submit">
                    Pay
                </button>
                <p className="text-red-700">{error}</p>
                {
                    transactionId && <p className="text-green-700">Your transaction id is : {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;