import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {LoginContext} from "../../context/loginContext";

function LoginSuccess() {
    const {logIn} = useContext(LoginContext)
    const [searchParams] = useSearchParams()
    const [email, setEmail] = useState("")

    useEffect(() => {
        const email = searchParams ? searchParams.get('email') : "";
        const token = searchParams ? searchParams.get('token') : "";

        setEmail(email);

        logIn(token,email)
    }, [searchParams])

    return (
        <div className="login-success">
            <p> Successful Login </p>
            <p>
                User: {email}
            </p>
        </div>
    );
}

export default LoginSuccess;