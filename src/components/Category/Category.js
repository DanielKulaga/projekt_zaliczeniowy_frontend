import './Category.css';
import {useEffect, useState} from "react";
import {categoryApi} from "../../api/categoryApi";
function Category({categoryOnClick}) {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        categoryApi.getCategory().then((response)=>{
            setCategories(response);
        })
    },[])

    return (
        <div className="category">
            <h4>Categories</h4>
            <ul>
                {categories.map((category, index)=>(
                    <li key={index}><button type="button" onClick={()=>categoryOnClick(category.ID)}>{category.name}</button></li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
