import './MenuList.css';
import {useEffect, useState} from "react";
import Category from "../Category/Category";
import {menuListApi} from "../../api/menuListApi";

function MenuList() {
    const [menuList, setMenuList] = useState([])
    const [category, setCategory] = useState(1)
    useEffect(()=> {
        menuListApi.getMenuList(category).then((response)=>{
                setMenuList(response);
            })
    },[category])

    function addToOrder(product){
        console.log("Added to order")
    }

    function categoryOnClick(categoryId){
        setCategory(categoryId);
    }

    return (
        <div className="website">
            <Category categoryOnClick={categoryOnClick}/>
            <div className="menu-list">
                {
                    menuList.map((product, index)=>(
                            <div className="item" key={index}>
                                <img alt="menu dish" src={product.photo}/>
                                <div className="info">
                                    <h4>
                                        {product.name}
                                    </h4>
                                    <p>
                                        {product.price} zł
                                    </p>
                                    <button role="button" onClick={()=>addToOrder(product)}>Order</button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>

    );
}

export default MenuList;
