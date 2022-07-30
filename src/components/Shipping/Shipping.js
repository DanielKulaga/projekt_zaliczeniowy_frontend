import './Shipping.css';
import {useState} from "react";
import {Button} from "@mui/material";
import Payment from "../Payment/Payment";

function Shipping(){
    const[street, setStreet] = useState("");
    const[number, setNumber] = useState("");
    const[city, setCity] = useState("");
    const[zipcode, setZipCode] = useState("");
    const[submit, setSubmit] = useState(false);
    function handleSubmit(event) {
        event.preventDefault()
        setSubmit(true);
        console.log("Form is submitted")
    }
    return (
        <div className="shipping">
            {
                submit===false &&(
                   <>
                    <h2>Shipping Address</h2>
                <form onSubmit={(event)=>handleSubmit(event)} className="shipping-form">
                <label htmlFor="street">Street:</label>
                <input type="text" id="street" name="street" value={street} onChange={(event)=> setStreet(event.target.value)} required/>
                <label htmlFor="number">House number:</label>
                <input type="text" id="number" name="number" value={number} onChange={(event)=> setNumber(event.target.value)} required/>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={city} onChange={(event)=> setCity(event.target.value)} required/>
                <label htmlFor="city">Zip Code:</label>
                <input type="text" id="ZipCode" name="ZipCode" value={zipcode} onChange={(event)=> setZipCode(event.target.value)} required/>
                <Button
                variant="contained"
                className="order-button"
                type="submit">
                Submit and pay
                </Button>
                </form></>)
                }
            {
                submit===true && (
                    <>
                        <h2>Payment</h2>
                        <Payment/>
                       </>)
            }
            </div>
    );
}
export default Shipping;