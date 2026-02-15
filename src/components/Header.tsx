import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import neideLogo from "@/assets/neide-logo.png";
import { useState } from "react";

const Header = () => {
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Adicionei 'relative' aqui para servir de referência ao centro */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* Logo (Fica na esquerda pelo justify-between) */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
          <img src={neideLogo} alt="Neide Bolos" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            Neide Bolos
          </span>
        </button>

        {/* Desktop Nav (CENTRADO NA FORÇA BRUTA) */}
        {/* 'absolute left-1/2 -translate-x-1/2' coloca ele matematicamente no centro da barra */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {[
            { label: "Cardápio", id: "cardapio" },
            { label: "Sobre", id: "sobre" },
            { label: "Contato", id: "contato" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Cart + Mobile Menu (Fica na direita pelo justify-between) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-full hover:bg-accent transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-2 animate-fade-in">
          {[
            { label: "Cardápio", id: "cardapio" },
            { label: "Sobre", id: "sobre" },
            { label: "Contato", id: "contato" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-2 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;