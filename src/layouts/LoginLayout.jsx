import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export const LoginLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return <Outlet />;
};

export default LoginLayout;
