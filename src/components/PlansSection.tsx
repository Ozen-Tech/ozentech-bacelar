import { Check, MessageCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PlansSectionProps {
  buildWhatsappUrl: (planName: string) => string;
}

const plans = [
  {
    name: "Gold",
    subtitle: "Plano Inicial",
    featured: false,
    intro: "Ideal para empresas que buscam suporte jurídico contínuo e orientação preventiva.",
    description:
      "Acesso direto a consultorias jurídicas ilimitadas, permitindo esclarecer dúvidas, organizar decisões e prevenir riscos no dia a dia.",
    badge: "Para empresas que desejam segurança jurídica sem complexidade.",
    features: [
      "Consultorias jurídicas ilimitadas (presencial ou on-line)",
      "Análise jurídica de contratos",
    ],
    cta: "Saber mais sobre este plano",
  },
  {
    name: "Platinum",
    subtitle: "Plano Intermediário",
    featured: true,
    intro: "Para empresas com maior volume de demandas jurídicas e necessidade de atuação contenciosa.",
    description:
      "Além das vantagens do Plano Gold, contempla atuação em processos judiciais com acompanhamento jurídico amplo e estruturado.",
    badge: "Para empresas em crescimento que precisam de maior previsibilidade.",
    features: [
      "Todas as vantagens do Plano Gold",
      "Até 20 processos judiciais/ano (São Luís/MA)",
    ],
    cta: "Falar sobre este plano",
  },
  {
    name: "Diamante",
    subtitle: "Plano Completo",
    featured: false,
    intro: "Assessoria jurídica ampla para empresas que entendem o jurídico como parte estratégica.",
    description:
      "Acompanhamento consultivo, atuação contenciosa e orientação jurídico-tributária com visão completa da realidade da empresa.",
    badge: "Para empresas que buscam excelência e segurança em alto nível.",
    features: [
      "Todas as vantagens dos planos anteriores",
      "Até 40 processos judiciais/ano",
      "Consultoria jurídico-tributária",
      "Workshop \"Empresa Legal\" (até 3h)",
    ],
    cta: "Conversar com um advogado",
  },
  {
    name: "Grupo Empresarial",
    subtitle: "Plano Exclusivo",
    featured: false,
    intro: "Desenvolvido para atender até cinco empresas do mesmo grupo econômico.",
    description:
      "Atuação jurídica ampla, estratégica e integrada, respeitando as particularidades de cada negócio.",
    badge: "Ideal para empresários que gerenciam múltiplas empresas.",
    features: [
      "Até 5 empresas do mesmo grupo",
      "Até 60 processos judiciais/ano",
      "Consultoria jurídico-tributária",
      "Workshop \"Empresa Legal\"",
    ],
    cta: "Entender este plano",
  },
];

const PlansSection = ({ buildWhatsappUrl }: PlansSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-section-light">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-body text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Planos de assessoria
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground leading-snug">
            Planos <span className="text-gold italic">Mensais</span>
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

        <motion.p
          className="text-muted-foreground font-body text-base sm:text-lg text-center max-w-2xl mx-auto mb-5 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Planos estruturados para atender empresas em diferentes estágios, com acompanhamento 
          jurídico contínuo, previsibilidade e tranquilidade na gestão.
        </motion.p>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground/70 font-body text-xs sm:text-sm mb-3">
            Áreas atendidas: <span className="text-foreground font-medium">Cível</span> · <span className="text-foreground font-medium">Trabalhista</span> · <span className="text-foreground font-medium">Relações de Consumo</span>
          </p>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground/60 font-body">
            <CreditCard className="w-4 h-4 shrink-0" />
            <span>Pagamentos recorrentes via cartão de crédito</span>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl border overflow-hidden flex flex-col ${
                plan.featured
                  ? "border-gold/40 bg-card shadow-gold-lg"
                  : "border-border/60 bg-card shadow-elegant"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="bg-gold/[0.08] px-4 py-2 text-center">
                  <span className="text-[10px] font-body font-semibold text-gold uppercase tracking-[0.2em]">
                    Mais popular
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-heading text-foreground mb-1 break-words">
                  Plano {plan.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-body text-gold font-semibold uppercase tracking-[0.15em] mb-4">
                  {plan.subtitle}
                </p>

                <p className="text-sm font-body text-foreground/80 mb-2 leading-relaxed">{plan.intro}</p>
                <p className="text-xs font-body text-muted-foreground leading-relaxed mb-5">{plan.description}</p>

                {/* Features list */}
                <ul className="space-y-3 flex-1 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="leading-snug break-words">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-body text-gold/70 italic mb-5 leading-relaxed">{plan.badge}</p>

                {/* CTA Button */}
                <Button
                  asChild
                  variant={plan.featured ? "default" : "outline"}
                  size="default"
                  className={`w-full h-auto min-h-[48px] py-3 px-4 ${
                    plan.featured
                      ? "bg-gold text-navy-dark hover:bg-gold-light font-semibold shadow-gold hover:shadow-gold-lg"
                      : "border-border text-foreground hover:bg-secondary hover:border-gold/20 font-medium"
                  } transition-all duration-300`}
                >
                  <a
                    href={buildWhatsappUrl(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full text-center"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span className="text-xs sm:text-sm leading-tight">{plan.cta}</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
