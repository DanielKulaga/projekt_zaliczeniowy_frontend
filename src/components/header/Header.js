import logo from './logo.svg';
import './Header.css';
import {Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="Header">
            <ul>
                <li><a>Ruczaj restaurant</a></li>
                <li><IconButton className="shopping-cart" aria-label="shopping-cart" color="primary" component={Link}
                                to="/shopping-cart">
                    <Badge class="bagde-number-card"
                           badgeContent={0} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton></li>
            </ul>
        </div>
    );
}

export default Header;
