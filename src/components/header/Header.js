import './Header.css';
import {Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCardContext} from "../../context/shoppingCardContext";

function Header() {
    const {order} = useContext(ShoppingCardContext)

    const totalNumberOfItems = () => {
        console.log(order.values())
        let total = 0
        for (const [key, value] of order) {
            total += value.quantity;
        }
        return total;
    }

    return (
        <div className="header">
            <ul>
                <li className="header-name"><Link to="/">Ruczaj restaurant</Link></li>
                <li><IconButton className="shopping-cart" aria-label="shopping-cart" color="primary" component={Link}
                                to="/shopping-card">
                    <Badge className="badge-number-card"
                           badgeContent={order.size === 0 ? 0 : totalNumberOfItems()} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton></li>
            </ul>
        </div>
    );
}

export default Header;
