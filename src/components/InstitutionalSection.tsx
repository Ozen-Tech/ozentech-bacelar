import { MapPin, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: MapPin,
    title: "São Luís/MA",
    text: "Sede com estrutura completa para atendimento presencial",
  },
  {
    icon: Globe,
    title: "Atuação Nacional",
    text: "Presença jurídica em todo o território brasileiro",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    text: "Ética, independência e compromisso com resultados",
  },
];

const InstitutionalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-light">
      <div className="container mx-auto px-6 sm:px-8 max-w-4xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Quem somos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground leading-snug mb-2">
            Mais do que resolver problemas,{" "}
            <br className="hidden sm:block" />
            ajudamos sua empresa a <span className="text-gold italic">evitá-los</span>
          </h2>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="divider-gold max-w-24 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="text-muted-foreground font-body text-base sm:text-lg leading-[1.8] text-center max-w-3xl mx-auto mb-16 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p>
            O <strong className="text-foreground font-medium">Bacelar Advocacia e Consultoria</strong> atua com foco na advocacia empresarial preventiva, 
            auxiliando empresários a tomarem decisões com segurança jurídica, clareza e respaldo técnico.
          </p>
          <p className="text-muted-foreground/80">
            Nossa atuação é inspirada nos grandes escritórios do Brasil e do exterior, sempre pautada 
            pela ética, independência profissional e excelência técnica.
          </p>
          <p className="text-muted-foreground/80">
            Com sede em São Luís/MA e atuação em todo o território nacional, oferecemos suporte jurídico 
            contínuo para empresas que entendem o jurídico como parte essencial da gestão.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl bg-card border border-border/60 shadow-elegant hover:shadow-elegant-lg hover:border-gold/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="w-14 h-14 rounded-full bg-gold/[0.08] flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-foreground font-heading text-base font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
