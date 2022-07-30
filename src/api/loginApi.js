import axios from "../axiosConfig/axiosConfig";

function loginWith(url){
    return axios.get(url).then((response)=>
        response.data
    )
}

export const loginApi = {
    loginWith,
};