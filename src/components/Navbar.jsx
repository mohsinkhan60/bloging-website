import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../../firebase";
import Logo from "./ui/Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const navLinks = [
    ["/", "Home"],
    ["/all-blogs", "All Blogs"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="bg-canvas-light fixed top-0 w-full z-50 border-b border-hairline">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size="sm" dark={false} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="text-slate hover:text-ink text-[15px] transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop right cluster */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  to="/add-blog"
                  className="text-slate hover:text-ink text-[15px] transition-colors px-3 py-2"
                >
                  Write a Blog
                </Link>
                <button
                  onClick={() => logout()}
                  className="bg-ink text-on-primary text-[15px] font-medium px-5 py-2.5 rounded-full hover:bg-graphite transition-colors leading-none"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-slate hover:text-ink text-[15px] transition-colors px-3 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  className="bg-ink text-on-primary text-[15px] font-medium px-5 py-2.5 rounded-full hover:bg-graphite transition-colors leading-none"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate hover:text-ink transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-canvas-light border-t border-hairline">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="block text-slate hover:text-ink py-2.5 text-[15px] transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-hairline space-y-1">
              {user ? (
                <>
                  <Link
                    to="/add-blog"
                    onClick={() => setIsOpen(false)}
                    className="block text-slate hover:text-ink py-2 text-[14px] transition-colors"
                  >
                    Write a Blog
                  </Link>
                  <button
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="block text-slate hover:text-ink py-2 text-[14px] transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block text-slate hover:text-ink py-2 text-[14px] transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block text-slate hover:text-ink py-2 text-[14px] transition-colors"
                  >
                    Get Started Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
