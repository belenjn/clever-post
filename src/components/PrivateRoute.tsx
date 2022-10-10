import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  authenticated,
  children,
}: {
  authenticated: boolean;
  children: JSX.Element;
}) => {
  return authenticated === true ? children : <Navigate to="/login" replace />;
};
