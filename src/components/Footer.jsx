import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "./ui/Logo";

const FooterColumn = ({ heading, links }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-widest text-mute mb-4">
      {heading}
    </p>
    <ul className="space-y-2.5">
      {links.map(({ label, to }) => (
        <li key={label}>
          <Link
            to={to}
            className="text-ash hover:text-on-primary text-[13px] transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-canvas border-t border-hairline-soft">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <Logo size="lg" dark />
            </Link>
            <p className="text-ash text-[14px] leading-relaxed mb-6 max-w-xs">
              A content platform built for people who love to read and write.
              Publish ideas that matter.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-canvas-soft border border-hairline-soft p-2 rounded-app-md text-mute hover:text-on-primary hover:border-ash transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ),
              )}
            </div>
          </div>

          <FooterColumn
            heading="Company"
            links={[
              { label: "About Us", to: "/about" },
              { label: "Contact Us", to: "/contact" },
              { label: "All Blogs", to: "/all-blogs" },
              { label: "Write a Blog", to: "/add-blog" },
            ]}
          />

          <FooterColumn
            heading="Resources"
            links={[
              { label: "Privacy Policy", to: "#" },
              { label: "Terms & Conditions", to: "#" },
              { label: "Customer Support", to: "#" },
              { label: "FAQ", to: "#" },
            ]}
          />

          <FooterColumn
            heading="Topics"
            links={[
              { label: "Technology", to: "#" },
              { label: "Education", to: "#" },
              { label: "Marketing", to: "#" },
              { label: "Lifestyle", to: "#" },
            ]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mute text-[12px]">
            © {new Date().getFullYear()} Bunzo. All rights reserved.
          </p>
          <Link to="/" className="flex items-center gap-2 opacity-70">
            <Logo size="md" dark />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
