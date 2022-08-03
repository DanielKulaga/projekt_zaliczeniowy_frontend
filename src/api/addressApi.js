import axios from "../axiosConfig/axiosConfig";

function createAddressSummary(address){

    return axios.post("/address",address).then((response)=>
        response.data
    )
}

function getAddressSummary(id){
    return axios.get("/address/" + id).then((response)=>
        response.data
    )
}

export const addressApi = {
    createAddressSummary,
    getAddressSummary,
};