import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import drImage from "@/assets/dr bacelar.jpeg";
import cert1 from "@/assets/certificado 1.jpeg";
import cert2 from "@/assets/certificado 2.jpeg";
import cert3 from "@/assets/certificado 3.jpeg";
import cert4 from "@/assets/certificado 4.jpeg";

const AuthoritySection = () => {
  const certificates = [cert1, cert2, cert3, cert4];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + certificates.length) % certificates.length);
  const next = () => setIndex((i) => (i + 1) % certificates.length);

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
              <div className="w-72 h-80 sm:w-80 sm:h-96 md:w-full md:h-[36rem] rounded-xl overflow-hidden border border-gold/20 bg-navy-light flex items-center justify-center relative">
                <img
                  src={drImage}
                  alt="Dr. Antônio Bacelar"
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <p className="text-primary-foreground/25 font-body text-xs uppercase tracking-[0.15em] mt-3 text-center">
                Foto do advogado
              </p>
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
                O Dr. Antônio Bacelar é pós‑graduado e especialista em Direito do Trabalho. Atua como consultor jurídico e palestrante, com foco em soluções preventivas para empresas.
              </p>
              <p>
                Foi Membro da Comissão de Prerrogativas da OAB/MA (2012–2015) e foi agraciado com a <span className="text-gold/80">Medalha Manuel Beckmann</span>, além de outras premiações e honrarias ao longo de sua carreira.
              </p>
              <div className="pt-2">
                {/* Carousel de certificados */}
                <div className="relative">
                  <div className="overflow-hidden rounded-md border border-primary-foreground/[0.06]">
                    <motion.div
                      className="flex"
                      animate={{ x: `-${index * 100}%` }}
                      transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    >
                      {certificates.map((src, i) => (
                        <div key={i} className="min-w-full flex-shrink-0 flex items-center justify-center bg-primary-foreground/3 p-3">
                          <img
                            src={src}
                            alt={`Certificado ${i + 1}`}
                            className="max-w-full max-h-44 sm:max-h-56 md:max-h-56 lg:max-h-64 object-contain rounded-md"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Controls */}
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-foreground/6 p-2 rounded-full hover:bg-primary-foreground/10 transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-gold" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próximo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-foreground/6 p-2 rounded-full hover:bg-primary-foreground/10 transition"
                  >
                    <ChevronRight className="w-4 h-4 text-gold" />
                  </button>

                  {/* Indicators */}
                  <div className="flex justify-center gap-2 mt-3">
                    {certificates.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full ${
                          i === index ? "bg-gold" : "bg-primary-foreground/30"
                        }`}
                        aria-label={`Ir para certificado ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
