import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedRoutes = () => {
    const { accessToken } = useAuth();

    return (
        accessToken ? <Outlet /> : <Navigate to="/login" />
    )
}