import { useState, useCallback } from "react";
import QualificationQuiz from "@/components/QualificationQuiz";
import HeroSection from "@/components/HeroSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import AuthoritySection from "@/components/AuthoritySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5598981409802"; // +55 98 9 8140-9802

import UnderConstruction from "@/components/UnderConstruction";

const Index = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState<{
    nomeEmpresa: string;
    cnpj: string;
    whatsapp: string;
  } | null>(null);

  const handleQuizComplete = useCallback((data: any) => {
    setQuizData(data);
    setQuizCompleted(true);
    setShowQuiz(false);
  }, []);

  const buildWhatsappUrl = useCallback(
    (planName?: string) => {
      const empresa = quizData?.nomeEmpresa || "";
      const message = planName
        ? `Olá, sou da empresa ${empresa} e gostaria de saber mais sobre o Plano ${planName}.`
        : `Olá, sou da empresa ${empresa} e gostaria de falar com um advogado.`;
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    },
    [quizData]
  );

  if (!quizCompleted) {
    if (showQuiz) {
      return <QualificationQuiz onComplete={handleQuizComplete} />;
    }
    return (
      <UnderConstruction
        whatsappUrl={buildWhatsappUrl()}
        onPreview={() => setShowQuiz(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection whatsappUrl={buildWhatsappUrl()} />
      <InstitutionalSection />
      <ServicesSection />
      <PlansSection buildWhatsappUrl={buildWhatsappUrl} />
      <AuthoritySection />
      <CtaSection whatsappUrl={buildWhatsappUrl()} />
      <Footer />
    </div>
  );
};

export default Index;
