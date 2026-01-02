import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import LevelZeroSection from "@/components/LevelZeroSection";
import MapSection from "@/components/MapSection";
import MemorySection from "@/components/MemorySection";
import AISection from "@/components/AISection";
import CommunitySection from "@/components/CommunitySection";
import FutureSection from "@/components/FutureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nivel Cero | Maestro del Juego - Aprende jugando en la era IA</title>
        <meta 
          name="description" 
          content="El simulador práctico de la vida real en la era de la IA. Aprende a usar herramientas digitales, trabaja con IA como copiloto, crea proyectos reales y colabora en comunidad." 
        />
      </Helmet>
      
      <main className="relative overflow-hidden">
        <FloatingParticles />
        <HeroSection />
        <WhatIsSection />
        <LevelZeroSection />
        <MapSection />
        <MemorySection />
        <AISection />
        <CommunitySection />
        <FutureSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
