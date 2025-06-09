import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from '../../sharedPages/SectionTitle';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51RVS2kFVtuofYo4sDW753B9SewnkGuvaM73XwsS51LMWCjlj73pTkOEoo8bxjtMEFVH2YhifCNGqQbACHQb1Yn0I00RXQ96Cjg');

    return (
        <div>
            <SectionTitle heading="Payment" subheading="please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;