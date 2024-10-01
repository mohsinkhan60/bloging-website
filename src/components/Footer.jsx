"use client";

import { useState } from "react";
import { FaFacebookF, FaSkype, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#22262A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold mb-4">
            <img src="/HomePic/nav.webp" alt="" />
          </h2>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the industry orem Ipsum has been
            the industry since the when unknown.
          </p>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700"
            >
              <FaSkype />
            </a>
            <a
              href="#"
              className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <button className="bg-coral-500 text-white px-6 py-2 rounded-full hover:bg-coral-600 transition duration-300">
            Share your thinking
          </button>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Contact Us",
              "Local Print Ads",
              "FAQ's",
              "Careers",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-coral-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Privacy Policy",
              "Discussion",
              "Terms & Conditions",
              "Customer Support",
              "Course FAQ's",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-coral-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* category */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Category</h3>
          <ul className="space-y-2">
            {[
              "Life Style",
              "Healthy",
              "Resaurent",
              "Travel Tips",
              "Marketing",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-coral-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-coral-600 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-indigo-800 text-center">
        <hr className="mb-8" />
        <p>
          © copyright {new Date().getFullYear()}. Made with ❤️ by{" "}
          <Link
            to="https://github.com/mohsinkhan60"
            target="_blank"
            className="text-coral-500 hover:underline"
          >
            Mohsin Khan
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
