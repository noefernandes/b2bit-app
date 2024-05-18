import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedRoutes = () => {
    const { accessToken } = useAuth();

    console.log("Token: ", accessToken);

    return (
        accessToken ? <Outlet /> : <Navigate to="/login" />
    )
}