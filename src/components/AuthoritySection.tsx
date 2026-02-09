import drBacelar from "@/assets/dr-bacelar.jpg";
import { Award, BookOpen, Briefcase, Medal } from "lucide-react";

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
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden border-2 border-gold/20 shadow-gold">
              <img
                src={drBacelar}
                alt="Dr. Antônio Bacelar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-gold font-body text-sm font-semibold uppercase tracking-wider mb-2">
              Advogado Responsável
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-8">
              Dr. Antônio Bacelar
            </h2>
            <ul className="space-y-5">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-primary-foreground/70 font-body text-sm leading-relaxed pt-2">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
