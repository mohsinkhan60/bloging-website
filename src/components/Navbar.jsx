/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronDown, Bell, User, Menu, X } from "lucide-react";
import { logout } from "../../firebase";
import { Link } from "react-router-dom";

const NavItem = ({ to, children, hasDropdown }) => (
  <li className="relative group">
    <Link
      to={to}
      className="text-white hover:text-orange-300 flex items-center px-3 py-2"
    >
      {children}
      {hasDropdown && (
        <ChevronDown className="h-4 w-4 ml-1 text-white group-hover:text-orange-300" />
      )}
    </Link>
  </li>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const profile_handler = (e) => {
    e.preventDefault();
    setProfile(!profile);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-white text-xl font-bold">
                <img
                  src="/AboutPic/login1.webp"
                  className="w-20 h-20 object-cover"
                  alt="Logo"
                />
              </span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            <div className="flex space-x-4 list-none">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavItem to="/category">Category</NavItem>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center relative">
            <button className="p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <Bell className="h-6 w-6" />
              <span className="sr-only">View notifications</span>
            </button>

            <button
              onClick={profile_handler}
              className="ml-3 p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white relative"
            >
              <User className="h-6 w-6" />
              <span className="sr-only">View profile</span>

              {/* Profile Dropdown */}
              {profile && (
                <div className="absolute right-0 mt-2 w-40 py-2 bg-white rounded-lg shadow-lg text-black">
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                  <Link
                    to="/add-blog"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Add Blog
                  </Link>
                </div>
              )}
            </button>
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-300 hover:focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/category"
              className="text-white hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Category
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-800">
            <div className="flex items-center px-5">
              <button className="p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                <Bell className="h-6 w-6" />
                <span className="sr-only">View notifications</span>
              </button>
              <button
                onClick={profile_handler}
                className="ml-auto p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white relative"
              >
                <User className="h-6 w-6" />
                <span className="sr-only">View profile</span>
                {profile && (
                  <div className="absolute right-0 mt-2 w-40 py-2 bg-white rounded-lg shadow-lg text-black">
                    <button
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={logout}
                    >
                      Logout
                    </button>
                    <Link
                      to="/add-blog"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Add Blog
                    </Link>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <hr />
    </nav>
  );
};

export default Navbar;
