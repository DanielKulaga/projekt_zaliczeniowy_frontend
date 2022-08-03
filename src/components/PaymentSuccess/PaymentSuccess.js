import './PaymentSuccess.css';
import {useContext, useEffect, useState} from "react";
import {ShoppingCardContext} from "../../context/shoppingCardContext";
import {orderApi} from "../../api/orderApi";
import {addressApi} from "../../api/addressApi";


function PaymentSuccess() {
    const {cleanShoppingCard, orderId} = useContext(ShoppingCardContext)
    const [order, setOrder] = useState(new Map())
    const [address, setAddress] = useState("")

    useEffect(() => {
        cleanShoppingCard()
        orderApi.getOrderSummary(orderId).then((response)=>{
            setOrder(new Map(JSON.parse(response.dishes)))
        })
        addressApi.getAddressSummary(orderId).then((response)=>{
            setAddress(response.address)
        })
        console.log(orderId)
    }, []);
    
    return (
        <div className="payment-success">
            <h3>Payment succeeded!</h3>
            {(order && address)&&
                <>
                <h4>Details of your order:</h4>
            {
                [...order.values()].map((product, index) => (
                <div className="item" key={index}>
                <img alt="menu dish" src={product.item.photo}/>
                <div className="info">
                <h4>
            {product.item.name}
                </h4>
                <p>
            {product.quantity} x {product.item.price} zł
                </p>
                <p>
            {product.quantity * product.item.price} zł
                </p>
                </div>
                </div>
                )
                )
            }
                <h4>Delivery Address:</h4>
                <p>
            {address}
                </p>
                <p>Delivery time: 25 minutes</p>
            </>
            }
        </div>
    );
}

export default PaymentSuccess;