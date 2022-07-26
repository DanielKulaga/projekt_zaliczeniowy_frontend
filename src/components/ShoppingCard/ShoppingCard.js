import './ShoppingCard.css';
import {useContext} from "react";
import {Link} from 'react-router-dom';
import {Button, IconButton} from "@mui/material";
import {ShoppingCardContext} from "../../context/shoppingCardContext";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

function ShoppingCard() {
    const {order, addItemToOrder, removeItemFromOrder} = useContext(ShoppingCardContext)

    const getTotalValueOfOrder = () => {
        let total = 0
        for (const [key, value] of order) {
            console.log(value)
            total += value.quantity * value.item.price;
        }
        return total;
    }

    return (
        <div className="shopping-card">
            <h3>Your Order:</h3>
            {
                order.size === 0  && <p>Your order is empty, please add more products!</p>
            }
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
                                <IconButton className="shopping-cart" aria-label="shopping-cart" color="primary"
                                            onClick={() => addItemToOrder(product.item)}> <AddCircleOutlineRoundedIcon/>
                                </IconButton>

                                <IconButton className="shopping-cart" aria-label="shopping-cart" color="primary"
                                            onClick={() => removeItemFromOrder(product.item)}> <RemoveCircleOutlineRoundedIcon/>
                                </IconButton>
                            </div>
                        </div>
                    )
                )
            }

            <h3>Total value of order: {getTotalValueOfOrder()} zł</h3>

            <Button
                variant="contained"
                className="order-button"
                component={Link}
                to="/shipping-address"
                disabled={order.size === 0}>
                Go to shipping address
            </Button>
        </div>
    );
}

export default ShoppingCard;