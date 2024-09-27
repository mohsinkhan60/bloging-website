/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ChevronDown, Bell, User, Menu, X } from 'lucide-react'

const NavItem = ({ href, children, hasDropdown }) => (
  <li className="relative group">
    <a
      href={href}
      className="text-white hover:text-orange-300 flex items-center px-3 py-2"
    >
      {children}
      {hasDropdown && (
        <ChevronDown className="h-4 w-4 ml-1 text-white group-hover:text-orange-300" />
      )}
    </a>
  </li>
)

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="ml-2 text-white text-xl font-bold"><img src="https://bunzo-react.pages.dev/static/d92d01d7dc700353d1c4c83c7c95c3be/e75ad/logo-2.webp" alt="" /></span>
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4 list-none">
              <NavItem href="/">
                Home
              </NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/category">Category</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            <button className="ml-3 p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <span className="sr-only">View profile</span>
              <User className="h-6 w-6" />
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
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

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-white hover:hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Category
            </a>
            <a
              href="#"
              className="text-white hover:hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Pages
            </a>
            <a
              href="#"
              className="text-white hover:hover:text-orange-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-800">
            <div className="flex items-center px-5">
              <button className="p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <button className="ml-auto p-1 rounded-full text-white hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                <span className="sr-only">View profile</span>
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
