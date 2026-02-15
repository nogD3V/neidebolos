import neideLogo from "@/assets/neide-logo.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-lavender-light via-background to-accent py-20 md:py-32"
    >
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-lilac/10 blur-3xl" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
            Bolos feitos com{" "}
            <span className="text-primary">amor</span> e{" "}
            <span className="text-primary">tradição</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Receitas de família que aquecem o coração. Cada bolo é feito com ingredientes
            selecionados e muito carinho pela Dona Neide.
          </p>
          <button
            onClick={() => scrollTo("cardapio")}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Ver Cardápio
          </button>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl scale-110" />
            <img
              src={neideLogo}
              alt="Dona Neide com seu bolo"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
