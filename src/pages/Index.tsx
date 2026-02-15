import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import CustomOrder from "@/components/CustomOrder";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <CustomOrder />
          <About />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
