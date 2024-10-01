import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import AddBlog from "./pages/AddBlog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="blog/details/:id" element={<UserDetails />} />
        </Route>

        {/* Login */}
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" index={true} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
