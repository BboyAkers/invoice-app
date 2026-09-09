import { Link } from "@tanstack/react-router";
import { useTheme } from "@/hooks/useTheme";
import logoSvg from "@/assets/logo.svg";
import moonIcon from "@/assets/icon-moon.svg";
import sunIcon from "@/assets/icon-sun.svg";
import avatarImg from "@/assets/image-avatar.jpg";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-[72px] md:h-[80px] lg:h-screen lg:w-[103px] lg:flex-col lg:rounded-r-[20px] bg-[#373B53] dark:bg-[#1E2139] transition-colors duration-200">
      {/* Brand Logo Box */}
      <Link
        to="/"
        className="group relative flex items-center justify-center w-[72px] h-[72px] md:w-[80px] md:h-[80px] lg:w-[103px] lg:h-[103px] bg-[#7C5DFA] rounded-r-[20px] overflow-hidden"
      >
        {/* Lower half curved overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#9277FF] rounded-tl-[20px] transition-all group-hover:h-3/5" />
        <img
          src={logoSvg}
          alt="Invoice App Logo"
          className="relative z-10 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-200 group-hover:scale-105"
        />
      </Link>

      {/* Right / Bottom Action Section */}
      <div className="flex items-center h-full lg:h-auto lg:w-full lg:flex-col">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          type="button"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="p-4 md:p-6 lg:p-6 text-[#7E88C3] hover:text-[#DFE3FA] transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#7C5DFA] rounded-lg"
        >
          {isDark ? (
            <img
              src={sunIcon}
              alt="Sun Icon"
              className="w-5 h-5 transition-transform hover:rotate-45"
            />
          ) : (
            <img
              src={moonIcon}
              alt="Moon Icon"
              className="w-5 h-5 transition-transform hover:-rotate-12"
            />
          )}
        </button>

        {/* Separator Line */}
        <div className="h-full w-px border-l border-[#494E6E] lg:h-px lg:w-full lg:border-t lg:border-l-0" />

        {/* User Profile Avatar */}
        <div className="p-4 md:p-6 lg:p-6 flex items-center justify-center">
          <img
            src={avatarImg}
            alt="User profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-transparent hover:border-[#7C5DFA] transition-all cursor-pointer"
          />
        </div>
      </div>
    </aside>
  );
}
