import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  component: FunctionComponent;
  auth: boolean;
}

export const PrivateRoute = ({ component: Component, auth }: Props ) => {
  return auth === true ? <Component /> : <Navigate to="/login" />;
};

