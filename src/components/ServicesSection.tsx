import { FileText, Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "Elaboração e Revisão de Contratos",
    description:
      "Procedimento técnico e minucioso na elaboração e revisão de contratos nas áreas Cível, Trabalhista e Relações de Consumo, visando segurança jurídica, equilíbrio contratual e estabilidade nas relações comerciais.",
  },
  {
    icon: Search,
    title: "Levantamento Tributário",
    description:
      "Análise da realidade tributária da empresa para identificar riscos, inconsistências e orientar a adoção das medidas mais adequadas, evitando passivos que possam comprometer o negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica e Inovação",
    description:
      "Atuação estratégica que alia segurança jurídica e inovação, criando uma base sólida para o crescimento sustentável da empresa.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-gradient relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-5xl relative">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Nossos serviços
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-foreground leading-snug">
            Planejamento Jurídico <span className="text-gold-gradient italic">Empresarial</span>
          </h2>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="divider-gold max-w-24 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        />

        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-primary-foreground/55 font-body text-base sm:text-lg leading-relaxed">
            Transforme desafios em oportunidades e fortaleça a estrutura jurídica da sua empresa.
          </p>
          <p className="text-primary-foreground/35 font-body text-sm sm:text-base leading-relaxed">
            A jornada para um futuro empresarial sólido começa com decisões bem orientadas, 
            prevenção de riscos e organização jurídica adequada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="group p-7 sm:p-8 rounded-xl border border-primary-foreground/[0.08] bg-primary-foreground/[0.03] hover:border-gold/20 hover:bg-primary-foreground/[0.06] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="w-14 h-14 rounded-lg bg-gold/[0.08] group-hover:bg-gold/[0.12] flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-heading text-primary-foreground mb-3">{title}</h3>
              <p className="text-primary-foreground/45 font-body text-sm leading-[1.7]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
