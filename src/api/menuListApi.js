import axios from "../axiosConfig/axiosConfig";

function getMenuList(category){
    if(category === 1){
        return axios.get("/items").then((response)=>
            response.data
        )
    }else{
        return axios.get("/items/" + category).then((response)=>
            response.data
        )
    }
}

export const menuListApi = {
    getMenuList,
};
