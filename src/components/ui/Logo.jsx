/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Logo = ({ dark = false, size = "md" }) => {
  const sizes = {
    sm: { img: "h-7 w-7", text: "text-[16px]" },
    md: { img: "h-9 w-9", text: "text-[18px]" },
    lg: { img: "h-12 w-auto", text: "text-[22px]" },
  };

  return (
    <Link to="/" className="flex items-center select-none">
      <img
        src="/AboutPic/login1.webp"
        alt="Bunzo icon"
        className={`${sizes[size].img} object-contain flex-shrink-0`}
      />
      <span
        className={`font-sans font-medium tracking-tight leading-none ${sizes[size].text} ${
          dark ? "text-on-primary" : "text-ink"
        }`}
      >
        Bunzo
      </span>
    </Link>
  );
};

export default Logo;
