import { MapPin, Globe, Award } from "lucide-react";

const InstitutionalSection = () => {
  const highlights = [
    { icon: MapPin, text: "Sede em São Luís/MA" },
    { icon: Globe, text: "Atuação em todo o território nacional" },
    { icon: Award, text: "Mais de 15 anos de atuação" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading text-foreground text-center mb-8">
          Advocacia de <span className="text-gold">Excelência</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Com aproximadamente 15 anos de atuação, sempre pautado pela técnica, independência, 
          ética profissional e respeito à ordem jurídica do país, o Bacelar Advocacia e Consultoria 
          oferece advocacia de excelência, com foco na advocacia empresarial.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-foreground font-body font-medium text-sm">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground font-body text-sm text-center mt-8">
          Reputação construída pela atuação nos tribunais e pela qualidade da consultoria jurídica.
        </p>
      </div>
    </section>
  );
};

export default InstitutionalSection;
