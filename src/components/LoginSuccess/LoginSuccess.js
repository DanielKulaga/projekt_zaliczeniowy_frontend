import {useSearchParams} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import {LoginContext} from "../../context/loginContext";

function LoginSuccess() {
    const {logIn} = useContext(LoginContext)
    const [searchParams] = useSearchParams()
    const [email, setEmail] = useState("")

    useEffect(() => {
        const emailParam = searchParams ? searchParams.get('email') : "";
        const token = searchParams ? searchParams.get('token') : "";

        setEmail(emailParam);

        logIn(token,emailParam)
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