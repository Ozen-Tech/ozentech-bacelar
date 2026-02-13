import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Scale } from "lucide-react";

interface QuizData {
  temCnpj: string;
  tipoEmpresa: string;
  tipoEmpresaOutro: string;
  nomeEmpresa: string;
  cnpj: string;
  whatsapp: string;
  consent: boolean;
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
    tipoEmpresaOutro: "",
    nomeEmpresa: "",
    cnpj: "",
    whatsapp: "",
    consent: false,
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

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lead_cnpj");
      if (stored) {
        const formatted = formatCnpj(stored);
        setData((d) => ({ ...d, cnpj: formatted, temCnpj: "sim" }));
      }
    } catch (err) {
      // ignore
    }
  }, []);

  const canProceed = () => {
    switch (step) {
      case 0: return data.temCnpj !== "";
      case 1: return data.tipoEmpresa !== "" && (data.tipoEmpresa !== "Outro" || data.tipoEmpresaOutro.trim().length >= 2);
      case 2: return data.nomeEmpresa.trim().length >= 2;
      case 3: return data.cnpj.replace(/\D/g, "").length === 14;
      case 4: return data.whatsapp.replace(/\D/g, "").length >= 10 && data.consent === true;
      default: return false;
    }
  };

  const validateCnpj = (cnpjRaw: string) => {
    const cnpj = cnpjRaw.replace(/\D/g, "");
    if (cnpj.length !== 14) return false;
    // invalid known sequences
    if (/^(\d)\1+$/.test(cnpj)) return false;

    const calc = (t: number) => {
      let sum = 0;
      let pos = t - 7;
      for (let i = t; i >= 1; i--) {
        sum += Number(cnpj[t - i]) * pos--;
        if (pos < 2) pos = 9;
      }
      const res = sum % 11;
      return res < 2 ? 0 : 11 - res;
    };

    const dv1 = calc(12);
    const dv2 = calc(13);
    return dv1 === Number(cnpj[12]) && dv2 === Number(cnpj[13]);
  };

  const saveLead = async () => {
    const payload = {
      nome: data.nomeEmpresa,
      cnpj: data.cnpj.replace(/\D/g, ""),
      whatsapp: data.whatsapp.replace(/\D/g, ""),
      consent: data.consent,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save lead");
      // remember cnpj locally
      localStorage.setItem("lead_cnpj", payload.cnpj);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNext = () => {
    if (step === 0 && data.temCnpj === "nao") {
      setRejected(true);
      return;
    }
    if (step === 4) {
      // final validation
      const isCnpjValid = validateCnpj(data.cnpj);
      if (!isCnpjValid) {
        alert("CNPJ inválido. Verifique e tente novamente.");
        return;
      }
      setTransitioning(true);
      saveLead().finally(() => {
        setTimeout(() => onComplete(data), 800);
      });
      return;
    }
    setStep(step + 1);
  };

  if (rejected) {
    return (
      <div className="fixed inset-0 bg-navy-gradient flex items-center justify-center p-6 sm:p-8 z-50">
        <div className="max-w-md text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-gold/[0.08] flex items-center justify-center mx-auto mb-8">
            <Scale className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-xl sm:text-2xl font-heading text-primary-foreground mb-5">
            Atendimento Exclusivo para Empresas
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm sm:text-base leading-[1.8]">
            O Bacelar Advocacia e Consultoria é especializado em assessoria jurídica empresarial. 
            Nossos serviços são destinados exclusivamente a empresas com CNPJ ativo.
          </p>
          <p className="text-primary-foreground/35 font-body mt-6 text-xs sm:text-sm">
            Agradecemos o seu interesse e desejamos sucesso em sua jornada.
          </p>
        </div>
      </div>
    );
  }

  if (transitioning) {
    return (
      <div className="fixed inset-0 bg-navy-gradient flex items-center justify-center p-6 sm:p-8 z-50">
        <div className="max-w-lg text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-gold/[0.08] flex items-center justify-center mx-auto mb-8">
            <Scale className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-xl sm:text-2xl font-heading text-primary-foreground mb-5">
            Obrigado, {data.nomeEmpresa}.
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm sm:text-base leading-[1.8]">
            Com base nas informações fornecidas, você pode acessar os planos jurídicos empresariais.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-8 h-8 border-2 border-gold/60 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    {
      title: "Atendimento jurídico exclusivo para empresas",
      subtitle: "Nossos planos de assessoria jurídica são destinados exclusivamente a empresas com CNPJ ativo.",
      question: "Você possui empresa com CNPJ ativo?",
      content: (
        <RadioGroup
          value={data.temCnpj}
          onValueChange={(val) => setData({ ...data, temCnpj: val })}
          className="space-y-3"
        >
          {[
            { value: "sim", label: "Sim, possuo CNPJ ativo" },
            { value: "nao", label: "Não possuo" },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                data.temCnpj === opt.value
                  ? "border-gold/50 bg-gold/[0.08]"
                  : "border-primary-foreground/10 hover:border-primary-foreground/20"
              }`}
            >
              <RadioGroupItem value={opt.value} />
              <span className="text-primary-foreground font-body text-sm sm:text-base">{opt.label}</span>
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
        <div className="space-y-4">
          <RadioGroup
            value={data.tipoEmpresa}
            onValueChange={(val) => setData({ ...data, tipoEmpresa: val, tipoEmpresaOutro: val === "Outro" ? data.tipoEmpresaOutro : "" })}
            className="grid grid-cols-2 gap-3"
          >
            {["MEI", "ME", "LTDA", "Outro"].map((opt) => (
              <label
                key={opt}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200 text-center ${
                  data.tipoEmpresa === opt
                    ? "border-gold/50 bg-gold/[0.08]"
                    : "border-primary-foreground/10 hover:border-primary-foreground/20"
                }`}
              >
                <RadioGroupItem value={opt} className="sr-only" />
                <span className="text-primary-foreground font-body text-sm sm:text-base font-medium">{opt}</span>
              </label>
            ))}
          </RadioGroup>
          {data.tipoEmpresa === "Outro" && (
            <Input
              value={data.tipoEmpresaOutro}
              onChange={(e) => setData({ ...data, tipoEmpresaOutro: e.target.value })}
              placeholder="Especifique o tipo da empresa"
              maxLength={50}
              className="bg-transparent border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold/50 h-12 sm:h-14 rounded-xl text-sm sm:text-base animate-fade-in"
            />
          )}
        </div>
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
          className="bg-transparent border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold/50 h-12 sm:h-14 rounded-xl text-sm sm:text-base"
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
          className="bg-transparent border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold/50 h-12 sm:h-14 font-mono rounded-xl text-sm sm:text-base"
        />
      ),
    },
    {
      title: "WhatsApp para contato",
      subtitle: "Utilizaremos este número para entrar em contato com você.",
      question: "",
      content: (
        <>
          <Input
            value={data.whatsapp}
            onChange={(e) => setData({ ...data, whatsapp: formatWhatsapp(e.target.value) })}
            placeholder="(00) 00000-0000"
            className="bg-transparent border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold/50 h-12 sm:h-14 font-mono rounded-xl text-sm sm:text-base"
          />
          <label className="mt-3 inline-flex items-start gap-3">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => setData({ ...data, consent: e.target.checked })}
              className="w-4 h-4 mt-1"
            />
            <span className="text-primary-foreground/65 text-sm">
              Concordo em receber comunicações institucionais e materiais relacionados aos serviços (LGPD).
            </span>
          </label>
        </>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 bg-navy-gradient flex items-center justify-center p-5 sm:p-8 z-50">
      <div className="w-full max-w-md animate-fade-in">
        {/* Progress bar */}
        <div className="flex gap-2 mb-12">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                i <= step ? "bg-gold/80" : "bg-primary-foreground/10"
              }`}
            />
          ))}
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-gold/[0.08] flex items-center justify-center mb-8">
          <Scale className="w-6 h-6 text-gold" />
        </div>

        <h2 className="text-xl sm:text-2xl font-heading text-primary-foreground mb-3 leading-snug">
          {steps[step].title}
        </h2>
        <p className="text-primary-foreground/40 text-xs sm:text-sm font-body mb-8 leading-relaxed">
          {steps[step].subtitle}
        </p>

        <div className="mb-10">{steps[step].content}</div>

        {/* Buttons */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 w-full">
          {step > 0 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="border-primary-foreground/15 text-primary-foreground/70 hover:bg-primary-foreground/[0.06] hover:text-primary-foreground min-h-[48px] w-full sm:w-auto order-2 sm:order-1 rounded-xl"
            >
              Voltar
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1 min-h-[48px] w-full bg-gold text-navy-dark hover:bg-gold-light disabled:opacity-20 disabled:cursor-not-allowed font-semibold h-12 sm:h-13 order-1 sm:order-2 rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300"
          >
            {step === 4 ? "Acessar planos" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QualificationQuiz;
