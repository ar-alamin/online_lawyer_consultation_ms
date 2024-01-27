import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const ProctectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);

  const isRoleAllowed = allowedRoles.includes(role);

  const accessibleRoute =
    token && isRoleAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
};

export default ProctectedRoute;
