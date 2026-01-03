import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Importar todas as imagens do carrossel
import bg1 from "../assets/background/capa-praia-dos-carneiros.jpg";
import bg2 from "../assets/background/capa-praia-dos-carneiros-2.jpg";
import bg3 from "../assets/background/capa-praia-dos-carneiros-1.jpg";

const Hero = () => {
  const backgrounds = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000); // Troca a cada 6 segundos

    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-none"
          style={{
            backgroundImage: `url(${backgrounds[currentBg]})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-800/40 to-ocean-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-width text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm md:text-base font-medium border border-white/20">
              A apenas 40 metros do mar
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
          >
            Sua experiência exclusiva
            <br />
            <span className="text-sand-100">à beira-mar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light"
          >
            Conforto premium, estrutura completa e o mar aos seus pés.
            <br className="hidden md:block" />
            Viva momentos inesquecíveis no{" "}
            <span className="font-semibold">Prive Beach</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a
              href="#accommodations"
              className="btn-primary text-lg shadow-2xl"
            >
              Conhecer Acomodações
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-32 md:bottom-28 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2 hidden md:block">
            Role para descobrir
          </span>
          <ChevronDown className="animate-bounce" size={32} />
        </a>
      </motion.div>

      {/* Carousel Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
      >
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBg(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentBg
                ? "bg-white w-8"
                : "bg-white/40 w-4 hover:bg-white/60"
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full h-16 md:h-24 text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
