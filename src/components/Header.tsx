import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "الرئيسية", href: "#hero" },
    { label: "استراتيجيات تسويق ثاقبة", href: "#strategy" },
    { label: "من نحن", href: "#about" },
    { label: "خبراتنا", href: "#expertise" },
    { label: "منظومتنا الإبداعية", href: "#ecosystem" },
    { label: "منهجيتنا", href: "#methodology" },
    { label: "أعمالنا", href: "#portfolio" },
    { label: "إدارة المعارض", href: "#event-management" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-2xl py-2"
          : "bg-background/80 backdrop-blur-md py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex justify-between items-center gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="text-primary">HEMA</span>
              <span className="text-foreground"> TOUCH</span>
            </div>
            <div className="hidden lg:block text-xs text-muted-foreground border-r border-border pr-3">
              Marketing Solutions
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground/80 hover:text-primary font-medium text-sm relative group cursor-pointer transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:inline-flex bg-primary hover:bg-primary-hover text-primary-foreground font-bold rounded-full px-4 md:px-6 py-2 text-sm md:text-base shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 flex flex-col gap-2 animate-fade-up bg-secondary/50 backdrop-blur-xl rounded-xl p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground font-medium text-sm py-2 px-3 border-b border-border hover:text-primary hover:bg-accent/30 rounded-lg transition-all cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold rounded-full mt-2 shadow-[var(--shadow-glow)]"
            >
              ابدأ الآن
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
