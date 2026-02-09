import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-14 sm:py-16 bg-navy-gradient border-t border-primary-foreground/[0.06]">
      <div className="container mx-auto px-6 sm:px-8 max-w-5xl text-center">
        {/* Logo area */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <Scale className="w-5 h-5 text-gold/70" />
          <span className="font-heading text-primary-foreground text-lg tracking-wide">
            Bacelar Advocacia e Consultoria
          </span>
        </div>

        {/* Decorative divider */}
        <div className="divider-gold max-w-16 mx-auto mb-6" />

        <p className="text-primary-foreground/35 font-body text-sm mb-2">
          São Luís/MA · Atuação em todo o território nacional
        </p>
        <p className="text-primary-foreground/20 font-body text-xs">
          © {new Date().getFullYear()} Bacelar Advocacia e Consultoria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
