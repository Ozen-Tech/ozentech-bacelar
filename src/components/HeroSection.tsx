import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  whatsappUrl: string;
}

const HeroSection = ({ whatsappUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6">
          Assessoria Jurídica{" "}
          <span className="text-gold-gradient">Empresarial</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 font-body font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Planejamento jurídico para empresas que buscam segurança, estratégia e crescimento sustentável.
        </p>
        <Button
          asChild
          className="bg-gold text-navy-dark hover:bg-gold-light font-semibold text-base px-8 h-14 shadow-gold"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com um advogado no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
