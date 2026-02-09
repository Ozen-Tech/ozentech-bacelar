import { MapPin, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: MapPin, text: "Sede em São Luís/MA" },
  { icon: Globe, text: "Atuação em todo o território nacional" },
  { icon: Award, text: "Ética, independência e excelência técnica" },
];

const InstitutionalSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-heading text-foreground text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Mais do que resolver problemas, ajudamos sua empresa a{" "}
          <span className="text-gold">evitá-los</span>
        </motion.h2>
        <motion.div
          className="text-muted-foreground font-body text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>
            O Bacelar Advocacia e Consultoria atua com foco na advocacia empresarial preventiva, 
            auxiliando empresários a tomarem decisões com segurança jurídica, clareza e respaldo técnico.
          </p>
          <p>
            Nossa atuação é inspirada nos grandes escritórios do Brasil e do exterior, sempre pautada 
            pela ética, independência profissional e excelência técnica.
          </p>
          <p>
            Com sede em São Luís/MA e atuação em todo o território nacional, oferecemos suporte jurídico 
            contínuo para empresas que entendem o jurídico como parte essencial da gestão.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-foreground font-body font-medium text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
