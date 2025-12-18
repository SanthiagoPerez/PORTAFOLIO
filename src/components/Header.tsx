import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.portfolio, href: "#portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="font-heading font-semibold text-xl text-foreground"
          >
            Tektōn<span className="text-primary">.</span>dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4 border border-border/50 rounded-lg px-1 py-0.5 bg-secondary/30">
              <button
                onClick={() => setLanguage("en")}
                className={`lang-button ${language === "en" ? "active" : ""}`}
              >
                EN
              </button>
              <span className="text-border">/</span>
              <button
                onClick={() => setLanguage("es")}
                className={`lang-button ${language === "es" ? "active" : ""}`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-1 border border-border/50 rounded-lg px-1 py-0.5 bg-secondary/30">
              <button
                onClick={() => setLanguage("en")}
                className={`lang-button ${language === "en" ? "active" : ""}`}
              >
                EN
              </button>
              <span className="text-border">/</span>
              <button
                onClick={() => setLanguage("es")}
                className={`lang-button ${language === "es" ? "active" : ""}`}
              >
                ES
              </button>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="section-container py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
