import './Header.css';
import {Badge, IconButton, Button} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCardContext} from "../../context/shoppingCardContext";
import {LoginContext} from "../../context/loginContext";

function Header() {
    const {order} = useContext(ShoppingCardContext)
    const {token, logOut} = useContext(LoginContext)

    const totalNumberOfItems = () => {
        console.log(order.values())
        let total = 0
        for (const [key, value] of order) {
            total += value.quantity;
            console.log(key)
        }
        return total;
    }

    return (
        <div className="header">
            <ul>
                <li className="header-name"><Link to="/">Ruczaj restaurant</Link></li>
                <span>
                    {
                        !token && (
                            <li><Button variant="outlined" component={Link} to="/login">Log in</Button></li>
                        )
                    }
                    {
                        token && (
                            <li><Button variant="outlined" component={Link} to="/" onClick={logOut}>Log out</Button></li>
                        )
                    }

                    <li>
                        <IconButton className="shopping-cart" aria-label="shopping-cart" color="primary"
                                    component={Link}
                                    to="/shopping-card">
                        <Badge className="badge-number-card"
                               badgeContent={order.size === 0 ? 0 : totalNumberOfItems()} color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </IconButton>
                    </li>
                </span>
            </ul>
        </div>
    );
}

export default Header;
