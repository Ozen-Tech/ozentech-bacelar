import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CtaSectionProps {
  whatsappUrl: string;
}

const CtaSection = ({ whatsappUrl }: CtaSectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-heading text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Vamos conversar sobre a realidade jurídica da sua empresa?
        </motion.h2>
        <motion.div
          className="space-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Se você deseja entender qual plano jurídico faz mais sentido para a sua empresa, 
            nossa equipe está à disposição para esclarecer dúvidas e apresentar a melhor solução, 
            de forma transparente e responsável.
          </p>
          <p className="text-xs text-gold/70 font-body font-semibold uppercase tracking-wider">
            Atendimento exclusivo para empresas com CNPJ
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

export default CtaSection;
