import { FileText, Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "Elaboração e Revisão de Contratos",
    description: "Cível, Trabalhista e Relações de Consumo",
  },
  {
    icon: Search,
    title: "Levantamento da Situação Tributária",
    description: "Análise completa da saúde fiscal da sua empresa",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica e Inovação",
    description: "Proteção legal para crescer com confiança",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-gradient">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-heading text-primary-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Planejamento Jurídico <span className="text-gold-gradient">Empresarial</span>
        </motion.h2>
        <motion.p
          className="text-primary-foreground/60 font-body text-lg text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transforme desafios em oportunidades e fortaleça sua empresa com orientação jurídica especializada. 
          A jornada da sua empresa para um futuro sólido começa aqui.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="p-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 hover:border-gold/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-6 h-6 text-gold" />
              </motion.div>
              <h3 className="text-lg font-heading text-primary-foreground mb-2">{title}</h3>
              <p className="text-primary-foreground/50 font-body text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
