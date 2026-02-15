import { Minus, Plus, Trash2, ShoppingCart, Send } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const WHATSAPP_NUMBER = "5511981739055";

const CartDrawer = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, isOpen, setIsOpen } = useCart();
  const [customerName, setCustomerName] = useState("");

  const handleSendWhatsApp = () => {
    if (!customerName.trim()) {
      return;
    }

    const itemsList = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} - R$ ${((item.product.price ?? 0) * item.quantity).toFixed(2).replace(".", ",")}`
      )
      .join("\n");

    const message = `*Pedido - Neide Bolos*\n\nCliente: ${customerName}\n\n *Itens:*\n${itemsList}\n\n*Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}*\n\nObrigado!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    clearCart();
    setCustomerName("");
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Seu Carrinho
          </SheetTitle>
          <SheetDescription>
            Revise seus itens e envie o pedido pelo WhatsApp
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingCart className="h-16 w-16 opacity-30" />
            <p className="text-center">Seu carrinho está vazio.<br />Adicione alguns bolos deliciosos!</p>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto space-y-3 py-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 bg-accent/50 rounded-xl p-3"
                >
                  <span className="text-3xl flex-shrink-0">{item.product.image}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      R$ {((item.product.price ?? 0) * item.quantity).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-accent transition-colors"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-accent transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 rounded-full hover:bg-destructive/10 text-destructive transition-colors ml-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-display text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <Input
                placeholder="Seu nome"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="rounded-full"
              />

              <button
                onClick={handleSendWhatsApp}
                disabled={!customerName.trim()}
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                Enviar Pedido pelo WhatsApp
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
