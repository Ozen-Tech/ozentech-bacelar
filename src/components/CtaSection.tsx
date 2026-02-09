import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CtaSectionProps {
  whatsappUrl: string;
}

const CtaSection = ({ whatsappUrl }: CtaSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 sm:px-8 max-w-2xl text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Próximo passo
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground leading-snug">
            Vamos conversar sobre a realidade jurídica da sua empresa?
          </h2>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="divider-gold max-w-24 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        />

        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-muted-foreground font-body text-base sm:text-lg leading-[1.8]">
            Se você deseja entender qual plano jurídico faz mais sentido para a sua empresa, 
            nossa equipe está à disposição para esclarecer dúvidas e apresentar a melhor solução, 
            de forma transparente e responsável.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-px bg-gold/30" />
            <p className="text-[10px] sm:text-xs text-gold/60 font-body font-semibold uppercase tracking-[0.2em]">
              Atendimento exclusivo para empresas com CNPJ
            </p>
            <div className="w-6 h-px bg-gold/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold text-navy-dark hover:bg-gold-light font-semibold text-sm sm:text-base px-6 sm:px-10 h-13 sm:h-14 shadow-gold-lg hover:shadow-gold transition-all duration-300 w-full sm:w-auto"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Falar com um advogado</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
