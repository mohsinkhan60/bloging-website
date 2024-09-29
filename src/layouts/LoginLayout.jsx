import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";

export const LoginLayout = () => {
  return auth ? <Navigate to="/" replace /> : <Outlet />;
};
export default LoginLayout;
