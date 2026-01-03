import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Waves, Users, UtensilsCrossed, Sparkles, Heart, Sun } from 'lucide-react'
import apartmentImg from '../assets/prive-beach-img/ap-103/img1.jpeg'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      icon: Waves,
      title: 'Piscina Exclusiva',
      description: 'Relaxe em nossa piscina privativa com água cristalina, perfeita para todas as idades.',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: UtensilsCrossed,
      title: 'Área Gourmet',
      description: 'Quiosques e churrasqueiras equipadas para criar momentos gastronômicos especiais.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: Users,
      title: 'Espaço para Família',
      description: 'Ambientes amplos e seguros onde toda a família pode se reunir e criar memórias.',
      image: apartmentImg,
    },
    {
      icon: Sun,
      title: 'Conexão com a Natureza',
      description: 'Desfrute do sol, do mar e da brisa em um ambiente harmonioso e acolhedor.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  const highlights = [
    { icon: Sparkles, text: 'Experiência Premium' },
    { icon: Heart, text: 'Momentos Inesquecíveis' },
    { icon: Users, text: 'Ideal para Grupos' },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-white to-sand-50">
      <div className="section-padding container-width" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-ocean-600 font-semibold text-sm md:text-base uppercase tracking-wider">
            Experiência & Lazer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mt-4 mb-6">
            Mais que hospedagem,
            <span className="text-gradient"> momentos inesquecíveis</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No Prive Beach, cada detalhe foi pensado para proporcionar experiências únicas. 
            Da piscina às churrasqueiras, do conforto à localização, tudo é feito para você relaxar e aproveitar.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center space-x-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <highlight.icon className="text-ocean-600" size={20} />
              <span className="font-semibold text-gray-800">{highlight.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <experience.icon className="text-ocean-600" size={28} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 md:p-12 bg-gradient-to-br from-ocean-50 to-sand-50 rounded-3xl"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Pronto para viver essa experiência?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Reserve agora e garanta momentos únicos à beira-mar com toda a estrutura e conforto que você merece.
          </p>
          <a
            href="#accommodations"
            className="btn-primary"
          >
            Ver Disponibilidade
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

