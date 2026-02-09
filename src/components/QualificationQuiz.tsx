import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Scale } from "lucide-react";

interface QuizData {
  temCnpj: string;
  tipoEmpresa: string;
  nomeEmpresa: string;
  cnpj: string;
  whatsapp: string;
}

interface QualificationQuizProps {
  onComplete: (data: QuizData) => void;
}

const QualificationQuiz = ({ onComplete }: QualificationQuizProps) => {
  const [step, setStep] = useState(0);
  const [rejected, setRejected] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [data, setData] = useState<QuizData>({
    temCnpj: "",
    tipoEmpresa: "",
    nomeEmpresa: "",
    cnpj: "",
    whatsapp: "",
  });

  const formatCnpj = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 14);
    return digits
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const formatWhatsapp = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const canProceed = () => {
    switch (step) {
      case 0: return data.temCnpj !== "";
      case 1: return data.tipoEmpresa !== "";
      case 2: return data.nomeEmpresa.trim().length >= 2;
      case 3: return data.cnpj.replace(/\D/g, "").length === 14;
      case 4: return data.whatsapp.replace(/\D/g, "").length >= 10;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step === 0 && data.temCnpj === "nao") {
      setRejected(true);
      return;
    }
    if (step === 4) {
      setTransitioning(true);
      setTimeout(() => onComplete(data), 3000);
      return;
    }
    setStep(step + 1);
  };

  if (rejected) {
    return (
      <div className="fixed inset-0 bg-navy-gradient flex items-center justify-center p-6 z-50">
        <div className="max-w-md text-center animate-fade-in">
          <Scale className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-2xl font-heading text-primary-foreground mb-4">
            Atendimento Exclusivo para Empresas
          </h2>
          <p className="text-primary-foreground/70 font-body leading-relaxed">
            O Bacelar Advocacia e Consultoria é especializado em assessoria jurídica empresarial. 
            Nossos serviços são destinados exclusivamente a empresas com CNPJ ativo.
          </p>
          <p className="text-primary-foreground/50 font-body mt-4 text-sm">
            Agradecemos o seu interesse e desejamos sucesso em sua jornada.
          </p>
        </div>
      </div>
    );
  }

  if (transitioning) {
    return (
      <div className="fixed inset-0 bg-navy-gradient flex items-center justify-center p-6 z-50">
        <div className="max-w-lg text-center animate-fade-in">
          <Scale className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-2xl font-heading text-primary-foreground mb-4">
            Obrigado, {data.nomeEmpresa}.
          </h2>
          <p className="text-primary-foreground/70 font-body leading-relaxed">
            Com base nas informações fornecidas, você pode acessar os planos jurídicos empresariais.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    {
      title: "Atendimento jurídico exclusivo para empresas",
      subtitle: "Nossos planos de assessoria jurídica são destinados exclusivamente a empresas com CNPJ ativo. Preencha os dados abaixo para prosseguir.",
      question: "Você possui empresa com CNPJ ativo?",
      content: (
        <RadioGroup
          value={data.temCnpj}
          onValueChange={(val) => setData({ ...data, temCnpj: val })}
          className="space-y-3"
        >
          {[
            { value: "sim", label: "Sim" },
            { value: "nao", label: "Não" },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                data.temCnpj === opt.value
                  ? "border-gold bg-gold/10"
                  : "border-primary-foreground/20 hover:border-primary-foreground/40"
              }`}
            >
              <RadioGroupItem value={opt.value} />
              <span className="text-primary-foreground font-body">{opt.label}</span>
            </label>
          ))}
        </RadioGroup>
      ),
    },
    {
      title: "Qual o tipo da sua empresa?",
      subtitle: "Precisamos entender melhor o perfil da sua empresa para garantir um atendimento adequado.",
      question: "Selecione o tipo",
      content: (
        <RadioGroup
          value={data.tipoEmpresa}
          onValueChange={(val) => setData({ ...data, tipoEmpresa: val })}
          className="space-y-3"
        >
          {["MEI", "ME", "LTDA", "Outro"].map((opt) => (
            <label
              key={opt}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                data.tipoEmpresa === opt
                  ? "border-gold bg-gold/10"
                  : "border-primary-foreground/20 hover:border-primary-foreground/40"
              }`}
            >
              <RadioGroupItem value={opt} />
              <span className="text-primary-foreground font-body">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      ),
    },
    {
      title: "Qual o nome da sua empresa?",
      subtitle: "Informe o nome da empresa para personalizar seu atendimento.",
      question: "",
      content: (
        <Input
          value={data.nomeEmpresa}
          onChange={(e) => setData({ ...data, nomeEmpresa: e.target.value })}
          placeholder="Nome da empresa"
          maxLength={100}
          className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold h-12"
        />
      ),
    },
    {
      title: "Informe o CNPJ da empresa",
      subtitle: "Campo obrigatório para validação.",
      question: "",
      content: (
        <Input
          value={data.cnpj}
          onChange={(e) => setData({ ...data, cnpj: formatCnpj(e.target.value) })}
          placeholder="00.000.000/0000-00"
          className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold h-12 font-mono"
        />
      ),
    },
    {
      title: "Qual o seu WhatsApp para contato?",
      subtitle: "Utilizaremos este número para entrar em contato com você.",
      question: "",
      content: (
        <Input
          value={data.whatsapp}
          onChange={(e) => setData({ ...data, whatsapp: formatWhatsapp(e.target.value) })}
          placeholder="(00) 00000-0000"
          className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold h-12 font-mono"
        />
      ),
    },
  ];

  return (
    <div className="fixed inset-0 bg-navy-gradient flex items-center justify-center p-6 z-50">
      <div className="w-full max-w-md animate-fade-in">
        {/* Progress */}
        <div className="flex gap-1.5 mb-10">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i <= step ? "bg-gold" : "bg-primary-foreground/15"
              }`}
            />
          ))}
        </div>

        <Scale className="w-10 h-10 text-gold mb-6" />

        <h2 className="text-2xl font-heading text-primary-foreground mb-2">
          {steps[step].title}
        </h2>
        <p className="text-primary-foreground/50 text-sm font-body mb-8">
          {steps[step].subtitle}
        </p>

        <div className="mb-8">{steps[step].content}</div>

        <div className="flex gap-3">
          {step > 0 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Voltar
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1 bg-gold text-navy-dark hover:bg-gold-light disabled:opacity-30 font-semibold h-12"
          >
            {step === 4 ? "Acessar planos" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QualificationQuiz;
