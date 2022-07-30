import './Login.css';
import {Button} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import {loginApi} from "../../api/loginApi";

function Login() {
    const loginByGoogle = () => {
        loginApi.loginWith("/login/google").then((linkToGoogle) => {
            window.open(linkToGoogle,"_self")
        })
    }

    const loginByGithub = () => {
        loginApi.loginWith("/login/github").then((linkToGoogle) => {
            window.open(linkToGoogle,"_self")
        })
    }

    return (
        <div className="login-page">
            <h4>You can login using:</h4>
            <Button variant="outlined" startIcon={<GoogleIcon/>} onClick={loginByGoogle}>Google</Button>
            <Button variant="outlined" startIcon={<GitHubIcon/>} onClick={loginByGithub}>GitHub</Button>
        </div>
    );
}

export default Login;
