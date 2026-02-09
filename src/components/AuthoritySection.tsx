import { Award, BookOpen, Briefcase, Medal, User } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  {
    icon: BookOpen,
    text: "Pós-Graduado e Especialista em Direito do Trabalho, Processo do Trabalho e Direito Previdenciário (UNISC)",
  },
  {
    icon: Briefcase,
    text: "Ex-membro da Comissão de Prerrogativas da OAB/MA (2012–2015)",
  },
  {
    icon: Medal,
    text: "Detentor da Medalha Cruz de Malta – Grau Honra ao Mérito (Latin American Quality Institute)",
  },
  {
    icon: Award,
    text: "Mais de 15 anos de atuação com foco em advocacia empresarial",
  },
];

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-gradient">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden border-2 border-gold/20 shadow-gold bg-navy-light flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-gold/40" />
                </div>
                <p className="text-primary-foreground/30 font-body text-xs uppercase tracking-wider">
                  Foto do advogado
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-gold font-body text-sm font-semibold uppercase tracking-wider mb-2">
              Advogado Responsável
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-8">
              Dr. Antônio Bacelar
            </h2>
            <ul className="space-y-5">
              {credentials.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={text}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-primary-foreground/70 font-body text-sm leading-relaxed pt-2">
                    {text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
