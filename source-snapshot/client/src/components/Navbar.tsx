import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // If we're not on home, navigate home first then scroll
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0F0F0D]/92 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Text-only logo — no favicon */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="font-display text-lg font-medium tracking-wide text-[#F0EDE8] hover:text-white transition-colors"
          >
            Tristan Crawford
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-medium text-[#6A6A65] hover:text-[#F0EDE8] transition-colors link-underline tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:tristan.crawford@torontomu.ca"
              className="font-body text-sm font-medium px-4 py-2 border border-[#A8A8A0]/35 text-[#A8A8A0] hover:bg-[#A8A8A0] hover:text-[#0F0F0D] transition-all duration-300 tracking-wide"
            >
              Get in Touch
            </a>
          </nav>

          <button
            className="md:hidden text-[#F0EDE8] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F0F0D]/98 flex flex-col justify-center items-center gap-8 transition-all duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="font-display text-4xl font-light text-[#F0EDE8] hover:text-[#A8A8A0] transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href="mailto:tristan.crawford@torontomu.ca"
          onClick={() => setMenuOpen(false)}
          className="font-body text-sm font-medium mt-4 px-6 py-3 border border-[#A8A8A0]/35 text-[#A8A8A0] hover:bg-[#A8A8A0] hover:text-[#0F0F0D] transition-all duration-300 tracking-wide"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
