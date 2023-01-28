import axios from 'axios';
import logout from './shared/utils/auth'
const apiClient = axios.create({
    baseURL: "http://localhost:5002/api",
    timeout: 10000,
})

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Beearer ${token}`
    }

    return config;
},
    (err) => {
        return Promise.reject(err)
    }
)
export const login = async (data) => {
    try {
        return await apiClient.post("/auth/login", data);
    } catch (exc) {
        return {
            error: true,
            exc,
        }
    }
}
export const register = async (data) => {
    try {
        return await apiClient.post("/auth/register", data);
    } catch (exc) {
        return {
            error: true,
            exc,
        }
    }
}

const checkResponseCode = (exc) => {
    const responseCode = exc?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout()
    }
}