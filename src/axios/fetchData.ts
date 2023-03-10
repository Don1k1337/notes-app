import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VITE_API_URL,
    params: {
        auth: process.env.VITE_API_KEY
    },
});

export default instance;