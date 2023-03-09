import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
        auth: import.meta.env.VITE_API_KEY
    },
});

export default instance;