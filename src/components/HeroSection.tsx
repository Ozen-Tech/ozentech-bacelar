import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  whatsappUrl: string;
}

const HeroSection = ({ whatsappUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-gradient">
      {/* Abstract geometric decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-gold/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full border border-primary-foreground/5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-gold/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-gold/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gold font-body text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            Bacelar Advocacia e Consultoria
          </p>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          Assessoria Jurídica Empresarial para decisões mais seguras e{" "}
          <span className="text-gold-gradient">estratégicas</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/60 font-body font-light leading-relaxed mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Planejamento jurídico contínuo para empresas que buscam segurança, organização e previsibilidade em suas decisões, com atendimento direto e especializado.
        </motion.p>

        <motion.p
          className="text-sm text-primary-foreground/40 font-body leading-relaxed mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Em um ambiente empresarial cada vez mais complexo, contar com orientação jurídica adequada não é apenas uma necessidade — é um diferencial estratégico.
        </motion.p>

        <motion.p
          className="text-xs text-gold/70 font-body font-semibold uppercase tracking-wider mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Atendimento exclusivo para empresas com CNPJ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            asChild
            className="bg-gold text-navy-dark hover:bg-gold-light font-semibold text-base px-8 h-14 shadow-gold"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com um advogado no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
