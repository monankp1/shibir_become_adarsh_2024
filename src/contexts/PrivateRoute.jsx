import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
