import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-navy-gradient border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-gold" />
          <span className="font-heading text-primary-foreground text-lg">
            Bacelar Advocacia e Consultoria
          </span>
        </div>
        <p className="text-primary-foreground/40 font-body text-sm">
          São Luís/MA • Atuação em todo o território nacional
        </p>
        <p className="text-primary-foreground/30 font-body text-xs mt-4">
          © {new Date().getFullYear()} Bacelar Advocacia e Consultoria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
