import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

interface ComponentProps {
    children: React.ReactNode
}

const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: ComponentProps) => {
    const [accessToken, setAccessToken] = useLocalStorage({ key: "accessToken", data: "" });
    const [refreshToken, setRefreshToken] = useLocalStorage({ key: "refreshToken", data: "" });
    const navigate = useNavigate();

    const login = async (access: string, refresh: string) => {
        setAccessToken(access);
        setRefreshToken(refresh);
        navigate("/");
    };

    const logout = () => {
        setAccessToken("");
        setRefreshToken("");
        navigate("/login", { replace: true });
    };

    const value = useMemo(() => ({
        accessToken,
        refreshToken,
        login,
        logout,
    }), [accessToken, refreshToken]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider.");
    }

    return context;
};