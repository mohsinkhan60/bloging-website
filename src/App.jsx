import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import About from "./pages/About";
import AddBlog from "./pages/AddBlog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import AllBlogs from "./pages/AllBlogs";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/details/:id" element={<UserDetails />} />
          <Route path="all-blogs" element={<AllBlogs />} />

          {/* Auth-required routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="edit-blog/:id" element={<AddBlog />} />
          </Route>
        </Route>

        {/* Login — redirects away if already logged in */}
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
