import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const loginInstance = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/auth/",
    headers: {
        "Accept": "application/json;version=v1_web",
    }
})

interface FailedRequests {
    resolve: (value: AxiosResponse) => void;
    reject: (value: AxiosError) => void;
    config: AxiosRequestConfig;
    error: AxiosError;
}

let failedRequests: FailedRequests[] = [];
let isRefreshing = false;

loginInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {
        const status = error.response?.status;
        const originalConfig = error.config!;

        if (status !== 401) {
            return Promise.reject(error);
        }

        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedRequests.push({
                    resolve,
                    reject,
                    config: originalConfig,
                    error
                })
            })
        }

        isRefreshing = true;

        try {
            const response = await loginInstance.post("refresh", {
                refresh: localStorage.getItem("refreshToken") ?? ""
            })

            const { accessToken = null } = response.data ?? {};

            if (!accessToken) {
                throw new Error("Error on while getting access token");
            }

            localStorage.setItem("accessToken", JSON.stringify(accessToken));

            failedRequests.forEach(({ resolve, reject, config }) => {
                loginInstance(config)
                    .then((response) => resolve(response))
                    .catch(error => reject(error));
            })

        } catch (error) {
            failedRequests.forEach(({ reject, error }) => reject(error))

            localStorage.setItem("accessToken", "");
            return Promise.reject(error);

        } finally {
            isRefreshing = false
            failedRequests = [];
        }
    }
)