import './Payment.css';
import {
    Elements,
} from "@stripe/react-stripe-js";

import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "../PaymentForm/PaymentForm";
import {useEffect, useState, useContext} from "react";
import {paymentApi} from "../../api/paymentApi";
import {ShoppingCardContext} from "../../context/shoppingCardContext";




const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

function Payment() {
    const [clientSecret, setClientSecret] = useState("");
    const {order} = useContext(ShoppingCardContext)

    const getTotalValueOfOrder = () => {
        let total = 0
        for (const [key, value] of order) {
            console.log(value, key)
            total += value.quantity * value.item.price;
        }
        return total;
    }

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        paymentApi.createPaymentIntent(getTotalValueOfOrder())
            .then((data) => setClientSecret(data));
    }, []);

    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div>
            {
                <div className="payment">
                    {clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                        <PaymentForm/>
                    </Elements>
                        )}
                </div>
            }
        </div>
    );
}


export default Payment;