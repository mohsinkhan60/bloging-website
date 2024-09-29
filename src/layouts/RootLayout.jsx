import { Navigate, Outlet } from "react-router-dom";

import { auth } from "../../firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return !auth ? (
    <Navigate to="/login" replace />
  ) : (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
