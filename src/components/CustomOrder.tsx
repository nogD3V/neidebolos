import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const CustomOrder = () => {
  const handleOrder = () => {
    const msg = encodeURIComponent(
      "Olá Dona Neide! Gostaria de fazer uma encomenda personalizada 🎂"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-lilac-soft to-lavender-light">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-display font-bold text-foreground">
          Quer algo especial? 🎉
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A Dona Neide faz bolos personalizados para aniversários, casamentos, chás de bebê e
          qualquer ocasião. Conte pra gente o que você precisa!
        </p>
        <button
          onClick={handleOrder}
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors shadow-lg"
        >
          <MessageCircle className="h-5 w-5" />
          Fazer Encomenda pelo WhatsApp
        </button>
      </div>
    </section>
  );
};

export default CustomOrder;
