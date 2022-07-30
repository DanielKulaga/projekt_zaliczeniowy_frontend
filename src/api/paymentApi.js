import axios from "../axiosConfig/axiosConfig";

function createPaymentIntent(amount){
   return axios.post("/create-payment-intent",{amount}).then((response)=>
       response.data
   )

}

export const paymentApi = {
    createPaymentIntent,
};