import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/25">
            S
          </div>
          <span className={cn(
            "text-xl font-display font-bold",
            isScrolled ? "text-slate-900" : "text-slate-900 lg:text-slate-800"
          )}>
            Sprzątanie Na Błysk
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("uslugi")} className="text-sm font-medium hover:text-primary transition-colors">Usługi</button>
          <button onClick={() => scrollToSection("dlaczego-my")} className="text-sm font-medium hover:text-primary transition-colors">O nas</button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
          <button onClick={() => scrollToSection("kontakt")} className="text-sm font-medium hover:text-primary transition-colors">Kontakt</button>
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => scrollToSection("cennik")}
            className="rounded-full font-medium"
          >
            Poznaj cennik
          </Button>
          <Button 
            className="rounded-full shadow-lg shadow-primary/20 gap-2 font-bold"
            asChild
          >
            <a href="tel:+48700800900">
              <Phone className="w-4 h-4" />
              Zadzwoń teraz
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection("uslugi")} className="text-lg font-medium py-2">Usługi</button>
            <button onClick={() => scrollToSection("cennik")} className="text-lg font-medium py-2">Cennik</button>
            <button onClick={() => scrollToSection("dlaczego-my")} className="text-lg font-medium py-2">Dlaczego my</button>
            <button onClick={() => scrollToSection("kontakt")} className="text-lg font-medium py-2">Kontakt</button>
            <hr />
            <Button asChild className="w-full justify-center gap-2 text-lg py-6">
              <a href="tel:+48700800900">
                <Phone className="w-5 h-5" />
                Zadzwoń: 700 800 900
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
