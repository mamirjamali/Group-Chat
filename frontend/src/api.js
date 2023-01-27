import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:5002/api",
    timeout: 10000,
})

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