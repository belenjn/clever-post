import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  authenticated,
  children,
}: {
  authenticated: boolean;
  children: JSX.Element;
}) => {
  return authenticated === true || localStorage.getItem("login") ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};
