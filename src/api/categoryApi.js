import axios from "../axiosConfig/axiosConfig";

function getCategory(){
    return axios.get("/category").then((response)=>
        response.data
    )
}

export const categoryApi = {
    getCategory,
};
