import './PaymentSuccess.css';
import {useContext, useEffect} from "react";
import {ShoppingCardContext} from "../../context/shoppingCardContext";

function PaymentSuccess() {
    const {cleanShoppingCard} = useContext(ShoppingCardContext)

    useEffect(() => {
        cleanShoppingCard()
    }, []);
    
    return (
        <div className="payment-success">
            <h3>Payment succeeded!</h3>
        </div>
    );
}

export default PaymentSuccess;