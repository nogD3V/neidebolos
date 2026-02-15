import { Heart, Instagram, Clock, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-bold">Neide Bolos</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Bolos artesanais feitos com amor e tradição de família. Cada receita conta uma
              história. 💜
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (11) 98173-9055
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /> @http.neidex
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Jandira, SP
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold">Horário</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Seg a Sex: 8h às 18h
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Sábado: 8h às 14h
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Domingo: Fechado
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 text-center text-sm text-background/50">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="h-3 w-3 text-primary" /> por Neide Bolos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
