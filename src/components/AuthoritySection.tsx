import { Award, BookOpen, Briefcase, Medal, User } from "lucide-react";
import { motion } from "framer-motion";

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
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-6">
              Dr. Antônio Bacelar
            </h2>
            <div className="space-y-4 text-primary-foreground/70 font-body text-sm leading-relaxed">
              <p>
                Com aproximadamente 15 anos de atuação, o Dr. Antônio Bacelar é Pós-Graduado e 
                Especialista em Direito do Trabalho, Processo do Trabalho e Direito Previdenciário 
                pela UNISC.
              </p>
              <p>
                Foi Membro da Comissão de Prerrogativas da OAB/MA (2012–2015) e recebeu diversas 
                premiações e honrarias, entre elas a Medalha Cruz de Malta – Grau Honra ao Mérito, 
                concedida pelo Latin American Quality Institute.
              </p>
              <p className="text-primary-foreground/90 font-medium">
                Sua atuação é pautada pela ética, técnica e compromisso com a advocacia empresarial 
                de excelência.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
