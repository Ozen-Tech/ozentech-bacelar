import { User } from "lucide-react";
import { motion } from "framer-motion";

const AuthoritySection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-gradient relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Photo area — 2 cols */}
          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-gold/10" />
              <div className="w-60 h-72 sm:w-72 sm:h-80 md:w-full md:h-96 rounded-xl overflow-hidden border border-gold/20 bg-navy-light flex items-center justify-center relative">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold/[0.08] flex items-center justify-center">
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-gold/30" />
                  </div>
                  <p className="text-primary-foreground/25 font-body text-xs uppercase tracking-[0.15em]">
                    Foto do advogado
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio area — 3 cols */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-gold/40" />
              <p className="text-gold font-body text-xs font-semibold uppercase tracking-[0.25em]">
                Advogado Responsável
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary-foreground mb-8">
              Dr. Antônio Bacelar
            </h2>

            <div className="space-y-5 text-primary-foreground/65 font-body text-sm sm:text-base leading-[1.8]">
              <p>
                Com aproximadamente 15 anos de atuação, o Dr. Antônio Bacelar é Pós-Graduado e 
                Especialista em Direito do Trabalho, Processo do Trabalho e Direito Previdenciário 
                pela UNISC.
              </p>
              <p>
                Foi Membro da Comissão de Prerrogativas da OAB/MA (2012–2015) e recebeu diversas 
                premiações e honrarias, entre elas a <span className="text-gold/80">Medalha Cruz de Malta – Grau Honra ao Mérito</span>, 
                concedida pelo Latin American Quality Institute.
              </p>
              <div className="pt-3 border-t border-primary-foreground/[0.08]">
                <p className="text-primary-foreground/85 font-medium italic">
                  "Sua atuação é pautada pela ética, técnica e compromisso com a advocacia empresarial 
                  de excelência."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
};

export default AuthoritySection;
