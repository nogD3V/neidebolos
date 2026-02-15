import neideLogo from "@/assets/neide-logo.png";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src={neideLogo}
            alt="Dona Neide"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary/20 shadow-xl flex-shrink-0"
          />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Sobre a Dona Neide
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Há mais de 30 anos, Dona Neide transforma receitas de família em bolos que encantam
              gerações. Tudo começou na cozinha da sua casa, com uma receita de bolo de chocolate
              que era sucesso entre os vizinhos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, cada bolo continua sendo feito à mão, com ingredientes selecionados e aquele
              carinho que só uma vovó sabe dar. Porque aqui, o ingrediente secreto é o amor. 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
