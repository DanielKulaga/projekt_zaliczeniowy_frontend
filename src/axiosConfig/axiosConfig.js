import axios from 'axios';

function baseURL() {
    if (window.location.hostname === 'localhost'){
        return 'http://localhost:1323/';
    } else {
        return 'https://restaurant-ruczaj-server.azurewebsites.net';
    }
}

export default axios.create({
    baseURL: baseURL(),

    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:1323, https://restaurant-ruczaj-server.azurewebsites.net',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});