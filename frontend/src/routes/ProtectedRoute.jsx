/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

function ProtectedRoute({ children, allowedRoles }) {
  const { token, role } = useContext(AuthContext);

  const isRoleAllowed = allowedRoles.includes(role);
  const accessibleRoute =
    token && isRoleAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
}

export default ProtectedRoute;
