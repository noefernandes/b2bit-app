import { jwtDecode } from "jwt-decode";

//Testes unitários
export const isTokenValid = (key: string): boolean => {
    const token = localStorage.getItem(key);

    if (token === null || token === undefined) {
        return false;
    }

    try {
        let decodedToken = jwtDecode(token);

        if (decodedToken.exp === undefined || decodedToken.exp === null) {
            return false;
        }

        if (Date.now() >= decodedToken.exp * 1000) {
            return false;
        }
    } catch (err) {
        return false;
    }


    return true;
}

export const isAccessTokenValid = (): boolean => {
    return isTokenValid("accessToken");
}

export const isRefreshTokenValid = (): boolean => {
    return isTokenValid("refreshToken");
}