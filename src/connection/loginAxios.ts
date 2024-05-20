import axios, { AxiosError } from "axios";

export const loginInstance = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/auth/",
    headers: {
        "Accept": "application/json;version=v1_web",
    }
})

export const handleNotAuthorizedRequest = async (error: AxiosError) => {
    const status = error.response?.status;

    if (status !== 401) {
        var d = Promise.reject(error);
        return d
    }

    try {
        const response = await loginInstance.post("refresh/", {
            refresh: localStorage.getItem("refreshToken") ?? ""
        })

        const { accessToken = null } = response.data ?? {};

        if (!accessToken) {
            throw new Error("Error on while getting access token");
        }

        localStorage.setItem("accessToken", JSON.stringify(accessToken));

    } catch (error) {

        localStorage.setItem("accessToken", "");
        return Promise.reject(error);

    }
}

loginInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    handleNotAuthorizedRequest
);