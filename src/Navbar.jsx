import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="font-mono text-xs uppercase tracking-[0.3em] text-white font-bold">
          DEV.PORTO
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-300">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-300">
            Projects
          </a>
          <a
            href="#credentials"
            className="hover:text-white transition-colors duration-300">
            Credentials
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* HAMBURGER BUTTON (ANDROID/MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white p-2"
          aria-label="Toggle Menu">
          {isOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden bg-neutral-950/95 backdrop-blur-lg px-6 py-6 absolute top-16 left-0 w-full flex-col gap-5 text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-900`}>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="hover:text-white py-1">
          About
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="hover:text-white py-1">
          Projects
        </a>
        <a
          href="#credentials"
          onClick={() => setIsOpen(false)}
          className="hover:text-white py-1">
          Credentials
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="hover:text-white py-1">
          Contact
        </a>
      </div>
    </nav>
  );
}
