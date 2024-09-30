import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
