import axios from "../axiosConfig/axiosConfig";

function createOrderSummary(order){
    return axios.post("/order",order).then((response)=>
        response.data
    )
}
function getOrderSummary(id){
    return axios.get("/order/" + id).then((response)=>
        response.data
    )
}

export const orderApi = {
    createOrderSummary,
    getOrderSummary,
};