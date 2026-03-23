import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
  { href: "/sobre", label: "Sobre" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-primary">
            NETZ<span className="text-accent">SOLUTIONS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-body font-bold transition-colors rounded-md hover:bg-secondary active:scale-[0.97] ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20NETZSolutions."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Fale conosco
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in-up">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-3 text-base font-body font-bold rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "text-accent bg-secondary"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20NETZSolutions."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center bg-accent text-accent-foreground px-5 py-3 rounded-md font-heading font-semibold text-sm"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
