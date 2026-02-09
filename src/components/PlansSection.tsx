import { Check, MessageCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PlansSectionProps {
  buildWhatsappUrl: (planName: string) => string;
}

const plans = [
  {
    name: "Gold",
    featured: false,
    features: [
      "Consultorias jurídicas ilimitadas (presencial ou on-line)",
      "Análise jurídica de contratos",
    ],
  },
  {
    name: "Platinum",
    featured: true,
    features: [
      "Todas as vantagens do Plano Gold",
      "Atuação em até 20 processos judiciais por ano na comarca de São Luís/MA",
    ],
  },
  {
    name: "Diamante",
    featured: false,
    features: [
      "Todas as vantagens dos planos anteriores",
      "Atuação em até 40 processos judiciais por ano",
      "Consultoria jurídico-tributária",
      'Cortesia: Workshop "Empresa Legal" (até 3 horas)',
    ],
  },
  {
    name: "Grupo Econômico Empresarial",
    featured: false,
    features: [
      "Até 5 empresas do mesmo grupo",
      "Atuação em até 60 processos judiciais por ano",
      "Consultoria jurídico-tributária",
      'Cortesia: Workshop "Empresa Legal"',
    ],
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
          className="text-muted-foreground font-body text-lg text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          O Bacelar Advocacia e Consultoria oferece planos mensais de assessoria jurídica que se adequam 
          às necessidades legais da sua empresa, em qualquer estágio.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CreditCard className="w-4 h-4" />
          <span>Pagamento recorrente via cartão de crédito • Áreas: Cível, Trabalhista e Relações de Consumo</span>
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
              <h3 className="text-xl font-heading text-foreground mb-6">
                Plano {plan.name}
              </h3>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-body text-muted-foreground">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
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
                  Quero este plano
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
