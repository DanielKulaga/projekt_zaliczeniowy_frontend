import {useState, createContext} from "react";

const getTokenFromStorage = () => {
    return localStorage.getItem('token');
};

const getEmailFromStorage = () => {
    return localStorage.getItem('email');
};

export const LoginContext = createContext({
    token: getTokenFromStorage(),
    email: getEmailFromStorage(),
    logIn: () => {
        // This is intentional
    },
    logOut: () => {
        // This is intentional
    },
});

export const LoginContextProvider = ({children}) => {
    const [token, setToken] = useState(getTokenFromStorage());
    const [email, setEmail] = useState(getEmailFromStorage());

    const logIn = (token, email) => {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        setToken(token);
        setEmail(email);
    }

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setToken(null);
        setEmail(null);
    }

    return (
        <LoginContext.Provider value={{
            token, email, logIn, logOut
        }}>
            {children}
        </LoginContext.Provider>
    )
}