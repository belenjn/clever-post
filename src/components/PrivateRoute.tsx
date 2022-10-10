import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  authenticated,
}: {
  component: React.FunctionComponent;
  authenticated: boolean;
}) => {
  return authenticated === true ? <Component /> : <Navigate to="/login" />;
};
