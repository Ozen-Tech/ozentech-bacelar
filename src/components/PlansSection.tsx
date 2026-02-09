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
      "Este plano oferece ao empresário acesso direto a consultorias jurídicas ilimitadas, permitindo esclarecer dúvidas, organizar decisões e prevenir riscos no dia a dia empresarial.",
    badge: "Indicado para empresas que desejam segurança jurídica sem complexidade.",
    features: [
      "Consultorias jurídicas ilimitadas (presencial ou on-line)",
      "Análise jurídica de contratos",
    ],
    cta: "Quero entender se este plano é ideal para minha empresa",
  },
  {
    name: "Platinum",
    subtitle: "Plano Intermediário",
    featured: true,
    intro: "Para empresas com maior volume de demandas jurídicas e necessidade de atuação contenciosa.",
    description:
      "Além de todas as vantagens do Plano Gold, este plano contempla a atuação do escritório em processos judiciais, garantindo acompanhamento jurídico mais amplo e estruturado.",
    badge: "Indicado para empresas em crescimento que precisam de maior previsibilidade jurídica.",
    features: [
      "Todas as vantagens do Plano Gold",
      "Atuação em até 20 processos judiciais por ano na comarca de São Luís/MA",
    ],
    cta: "Falar com um advogado sobre este plano",
  },
  {
    name: "Diamante",
    subtitle: "Plano Completo",
    featured: false,
    intro: "Assessoria jurídica ampla para empresas que entendem o jurídico como parte estratégica do negócio.",
    description:
      "Este plano reúne acompanhamento consultivo, atuação contenciosa e orientação jurídico-tributária, oferecendo uma visão completa da realidade jurídica da empresa.",
    badge: "Indicado para empresas que buscam excelência e segurança em alto nível.",
    features: [
      "Todas as vantagens dos planos anteriores",
      "Atuação em até 40 processos judiciais por ano",
      "Consultoria jurídico-tributária",
      'Cortesia: Workshop "Empresa Legal" (até 3 horas)',
    ],
    cta: "Conversar com um advogado",
  },
  {
    name: "Grupo Econômico Empresarial",
    subtitle: "Plano Exclusivo",
    featured: false,
    intro: "Desenvolvido para atender até cinco empresas do mesmo grupo econômico.",
    description:
      "Atuação jurídica ampla, estratégica e integrada, respeitando as particularidades de cada negócio.",
    badge: "Ideal para empresários que gerenciam múltiplas empresas e desejam centralizar a assessoria jurídica.",
    features: [
      "Até 5 empresas do mesmo grupo",
      "Atuação em até 60 processos judiciais por ano",
      "Consultoria jurídico-tributária",
      'Cortesia: Workshop "Empresa Legal"',
    ],
    cta: "Entender este plano para meu grupo empresarial",
  },
];

const PlansSection = ({ buildWhatsappUrl }: PlansSectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-heading text-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Planos <span className="text-gold">Mensais</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground font-body text-lg text-center max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Os planos mensais do Bacelar Advocacia e Consultoria foram estruturados para atender empresas 
          em diferentes estágios, oferecendo acompanhamento jurídico contínuo, previsibilidade e 
          tranquilidade na gestão.
        </motion.p>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground/70 font-body text-sm mb-2">
            As áreas atendidas incluem: <span className="text-foreground font-medium">Área Cível</span> • <span className="text-foreground font-medium">Área Trabalhista</span> • <span className="text-foreground font-medium">Relações de Consumo</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
            <CreditCard className="w-4 h-4" />
            <span>Pagamentos recorrentes via cartão de crédito</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col ${
                plan.featured
                  ? "border-gold bg-card shadow-gold"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {plan.featured && (
                <span className="text-xs font-body font-semibold text-gold uppercase tracking-wider mb-2">
                  Mais popular
                </span>
              )}
              <h3 className="text-xl font-heading text-foreground mb-1">
                Plano {plan.name}
              </h3>
              <p className="text-xs font-body text-gold font-semibold uppercase tracking-wider mb-4">
                {plan.subtitle}
              </p>
              <p className="text-sm font-body text-foreground/80 mb-2">{plan.intro}</p>
              <p className="text-xs font-body text-muted-foreground leading-relaxed mb-4">{plan.description}</p>
              <ul className="space-y-3 flex-1 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-body text-muted-foreground">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-body text-gold/80 italic mb-6">{plan.badge}</p>
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className={
                  plan.featured
                    ? "bg-gold text-navy-dark hover:bg-gold-light font-semibold w-full"
                    : "border-border text-foreground hover:bg-secondary w-full"
                }
              >
                <a href={buildWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span className="text-xs">{plan.cta}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
