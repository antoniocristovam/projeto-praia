import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Waves, Home, Users, Sparkles } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Waves,
      title: '40 metros da praia',
      description: 'Localização privilegiada para você aproveitar o mar a qualquer momento',
    },
    {
      icon: Home,
      title: 'Estrutura completa',
      description: 'Tudo que você precisa para uma estadia confortável e memorável',
    },
    {
      icon: Users,
      title: 'Para toda família',
      description: 'Espaços amplos e seguros, perfeitos para famílias e grupos de amigos',
    },
    {
      icon: Sparkles,
      title: 'Experiência premium',
      description: 'Cada detalhe pensado para proporcionar momentos especiais',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 gradient-sand">
      <div className="section-padding container-width" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="text-ocean-600 font-semibold text-sm md:text-base uppercase tracking-wider">
                Bem-vindo ao Prive Beach
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
                Onde o conforto encontra
                <span className="text-gradient"> o paraíso</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              No <strong>Prive Beach</strong>, transformamos sua estadia à beira-mar em uma experiência única e inesquecível. 
              Localizado a apenas 40 metros da praia, nosso empreendimento oferece o equilíbrio perfeito entre 
              proximidade do mar e conforto absoluto.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Com apartamentos completos e equipados, áreas de lazer exclusivas e uma estrutura pensada nos mínimos 
              detalhes, o Prive Beach é o destino ideal para famílias, grupos de amigos e todos que buscam 
              momentos especiais em um ambiente acolhedor e sofisticado.
            </p>

            <a
              href="#accommodations"
              className="inline-block btn-primary mt-4"
            >
              Ver Acomodações
            </a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

