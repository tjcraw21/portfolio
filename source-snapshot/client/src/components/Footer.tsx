export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/6 bg-[#0D0D0B] py-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#2A2A28]">
          &copy;{year} Tristan Crawford
        </p>
        <nav className="flex items-center gap-6">
          {[
            { label: "Experience", href: "#experience" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-xs text-[#2A2A28] hover:text-[#7A7A75] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <p className="font-mono text-xs text-[#2A2A28]">
          Toronto, ON
        </p>
      </div>
    </footer>
  );
}
