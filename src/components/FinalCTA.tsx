import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Calendar, Heart } from "lucide-react";
import backgroundImage from "../assets/background/capa-praia-dos-carneiros.jpg";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-800/85 to-ocean-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white space-y-8 max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Sparkles className="text-sand-100" size={40} />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight"
          >
            Suas férias dos sonhos
            <br />
            <span className="text-sand-100">começam aqui</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            Não deixe para depois. O momento de criar memórias inesquecíveis à
            beira-mar é agora. Reserve sua acomodação no Prive Beach e descubra
            o verdadeiro significado de férias perfeitas.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 md:gap-12 py-8"
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-bold text-sand-100">
                40m
              </div>
              <div className="text-sm md:text-base text-white/80">Da praia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-bold text-sand-100">
                6
              </div>
              <div className="text-sm md:text-base text-white/80">
                Acomodações
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-display font-bold text-sand-100">
                54m²
              </div>
              <div className="text-sm md:text-base text-white/80">
                Por unidade
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Quero reservar minha estadia no Prive Beach!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white text-ocean-700 rounded-full font-bold text-lg hover:bg-sand-50 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-3"
            >
              <Calendar size={24} />
              <span>Reservar Agora</span>
            </a>
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre o Prive Beach"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full font-bold text-lg text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <Heart size={24} />
              <span>Fale Conosco</span>
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <p className="text-white/70 text-sm">
              ✨ Atendimento personalizado • Reserva segura • Experiência
              garantida
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
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

export default FinalCTA;
