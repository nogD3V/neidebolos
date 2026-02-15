import { products } from "@/data/products";
import { sabores, massas } from "@/data/flavors";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { value: "bolos", label: "🎂 Caseirinhos" },
  { value: "fatias", label: "🍰 Fatias & Doces" },
  { value: "encomendas", label: "🎨 Encomendas" },
  { value: "sabores", label: "🍬 Sabores" },
] as const;

const MenuSection = () => {
  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Nosso Cardápio
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha seus favoritos e monte seu pedido. Entregamos com carinho!
          </p>
        </div>

        <Tabs defaultValue="bolos" className="w-full">
          <TabsList className="w-full max-w-lg mx-auto grid grid-cols-4 mb-10 bg-accent h-12 rounded-full p-1">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="rounded-full text-xs sm:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Product tabs */}
          {(["bolos", "fatias", "encomendas"] as const).map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === cat)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}

          {/* Sabores tab */}
          <TabsContent value="sabores">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Sabores */}
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  🍰 Sabores de Recheio
                </h3>
                <p className="text-sm text-muted-foreground">
                  Escolha o recheio perfeito para o seu bolo!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sabores.map((sabor) => (
                    <div
                      key={sabor.id}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                    >
                      <span className="text-lg">{sabor.emoji}</span>
                      <span className="text-sm font-medium text-foreground">{sabor.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Massas */}
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  🎂 Tipos de Massa
                </h3>
                <p className="text-sm text-muted-foreground">
                  Escolha a base ideal para a sua encomenda!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {massas.map((massa) => (
                    <div
                      key={massa.id}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                    >
                      <span className="text-lg">{massa.emoji}</span>
                      <span className="text-sm font-medium text-foreground">{massa.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
