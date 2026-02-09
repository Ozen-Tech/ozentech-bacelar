import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  whatsappUrl: string;
}

const HeroSection = ({ whatsappUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-gradient">
      {/* Subtle geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-gold/[0.06]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-gold/[0.04]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
        />
        <motion.div
          className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full border border-primary-foreground/[0.03]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
        />
        {/* Subtle gold accent dots */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-1 h-1 rounded-full bg-gold/20"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 left-1/4 w-1.5 h-1.5 rounded-full bg-gold/15"
          animate={{ opacity: [0.05, 0.3, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center max-w-3xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold/30" />
            <p className="text-gold font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]">
              Bacelar Advocacia e Consultoria
            </p>
            <div className="w-8 h-px bg-gold/30" />
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-[1.15] mb-8"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Assessoria Jurídica Empresarial para decisões mais seguras e{" "}
          <span className="text-gold-gradient italic">estratégicas</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-primary-foreground/55 font-body font-light leading-relaxed mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Planejamento jurídico contínuo para empresas que buscam segurança, organização e previsibilidade em suas decisões.
        </motion.p>

        <motion.p
          className="text-xs sm:text-sm text-primary-foreground/35 font-body leading-relaxed mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Em um ambiente empresarial cada vez mais complexo, contar com orientação jurídica adequada não é apenas uma necessidade — é um diferencial estratégico.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-6 h-px bg-gold/40" />
          <p className="text-[10px] sm:text-xs text-gold/60 font-body font-semibold uppercase tracking-[0.2em]">
            Atendimento exclusivo para empresas com CNPJ
          </p>
          <div className="w-6 h-px bg-gold/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy-dark hover:bg-gold-light font-semibold text-sm sm:text-base px-6 sm:px-10 h-13 sm:h-14 shadow-gold-lg hover:shadow-gold transition-all duration-300 w-full sm:w-auto"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>Falar com um advogado</span>
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
