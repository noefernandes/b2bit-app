import axios from "axios";

export const userInstance = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/auth/",
    headers: {
        "Accept": "application/json;version=v1_web",
    }
})

userInstance.interceptors.request.use((request) => {

    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request
});