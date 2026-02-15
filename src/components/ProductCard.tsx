import { Plus, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "5511981739055"; // Substituir pelo número da Neide

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleConsult = () => {
    const msg = encodeURIComponent(
      `Olá Dona Neide! Gostaria de saber mais sobre: ${product.name}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift">
      {/* Emoji placeholder */}
      <div className="h-48 bg-gradient-to-br from-accent to-lavender-light flex items-center justify-center">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
          {product.price !== null ? (
            <span className="text-xl font-bold text-primary">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
          ) : (
            <span className="text-sm font-medium text-lilac bg-lilac-soft px-3 py-1 rounded-full">
              Sob consulta
            </span>
          )}

          {product.price !== null ? (
            <button
              onClick={handleAdd}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Adicionar
            </button>
          ) : (
            <button
              onClick={handleConsult}
              className="flex items-center gap-1.5 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
