import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Logo from "@/assets/logo bacelar adv.png";
import Bg from "@/assets/em construção.png";

interface Props {
  whatsappUrl?: string;
  onPreview: () => void;
}

const UnderConstruction = ({ onPreview }: Props) => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to improve text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        style={{ zIndex: 1 }}
        aria-hidden
      />
      {/* Fixed logo at top center */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <img src={Logo} alt="Bacelar Advocacia e Consultoria" className="w-36 sm:w-56 object-contain" />
      </div>
      {/* Watermark paper/logo at bottom */}
      <div className="absolute inset-x-0 -bottom-10 flex justify-center pointer-events-none" style={{ zIndex: 2 }}>
        <div className="w-3/4 max-w-4xl opacity-10 transform -rotate-3">
          <div className="bg-white/60 border border-border rounded-md p-12 flex items-center justify-center">
            <img src={Logo} alt="" className="w-48 object-contain" aria-hidden />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl text-center py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          {/* Top logo moved to page header */}

          {/* Illustration placeholder removed (will be replaced by doll image when provided) */}

          <div className="inline-block bg-white/95 dark:bg-black/80 rounded-lg px-6 py-4 backdrop-blur-sm shadow-elegant text-left max-w-xl mx-auto mb-4 z-20">
            <h1 className="text-3xl sm:text-4xl font-heading text-black dark:text-white mb-2">
              Site em construção
            </h1>
            <p className="text-black/80 dark:text-white/80 text-sm sm:text-base leading-relaxed">
              Estamos preparando uma experiência nova e exclusiva. Enquanto isso, veja a prévia da nossa landing page.
            </p>
          </div>
        </motion.div>

        <div className="flex items-center justify-center">
          <button
            onClick={onPreview}
            className="w-full sm:w-auto"
            aria-label="Acessar prévia da landing"
          >
            <Button variant="outline" className="w-60 sm:w-48">Ver prévia (landing)</Button>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;

