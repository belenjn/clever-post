import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  auth,
}: {
  component: React.FunctionComponent<{}>
  auth: boolean;
}) => {
  return auth === true ? <Component /> : <Navigate to="/login" />;
};
