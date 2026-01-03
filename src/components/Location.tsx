import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation, Clock, Coffee, ShoppingBag, Utensils } from 'lucide-react'

const Location = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nearbyPlaces = [
    {
      icon: Navigation,
      title: 'Praia',
      distance: '40 metros',
      description: 'Acesso direto e rápido',
    },
    {
      icon: Coffee,
      title: 'Cafés e Restaurantes',
      distance: 'Caminhada',
      description: 'Opções variadas próximas',
    },
    {
      icon: ShoppingBag,
      title: 'Comércio Local',
      distance: 'Região',
      description: 'Mercados e lojas',
    },
    {
      icon: Utensils,
      title: 'Gastronomia',
      distance: 'Proximidade',
      description: 'Culinária variada',
    },
  ]

  return (
    <section id="location" className="py-20 md:py-32 bg-white">
      <div className="section-padding container-width" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-ocean-600 font-semibold text-sm md:text-base uppercase tracking-wider">
            Localização Privilegiada
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mt-4 mb-6">
            No coração da
            <span className="text-gradient"> melhor região</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Localizado na Avenida José Bezerra Sobrinho em Tamandaré - PE, o Prive Beach oferece acesso rápido 
            à praia e proximidade com tudo que você precisa para uma estadia perfeita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {/* Google Maps Embed - Prive Beach Tamandaré */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.613397637026!2d-35.0908164!3d-8.7282104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700794785cb4fdd%3A0x399191cd5108d038!2sPriv%C3%AA%20Beach%20Tamandar%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1767450457023!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
                title="Localização Prive Beach Tamandaré"
              />
            </div>

            {/* Distance Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-ocean-600 text-white px-8 py-4 rounded-full shadow-2xl">
                <div className="flex items-center space-x-3">
                  <Clock className="text-white" size={24} />
                  <div className="text-left">
                    <p className="text-xs font-medium opacity-90">Até a praia</p>
                    <p className="text-lg font-bold">Apenas 40m</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nearby Places */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 mt-8 lg:mt-0"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                Tudo perto de você
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa localização estratégica permite que você aproveite o melhor da região, 
                com fácil acesso à praia e proximidade com comércios, restaurantes e pontos turísticos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => (
                <motion.div
                  key={place.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-sand-50 to-white p-6 rounded-2xl border border-sand-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mb-4">
                    <place.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">
                    {place.title}
                  </h4>
                  <p className="text-sm text-ocean-600 font-semibold mb-1">
                    {place.distance}
                  </p>
                  <p className="text-sm text-gray-600">
                    {place.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-ocean-600 to-ocean-700 p-6 rounded-2xl text-white mt-8">
              <div className="flex items-start space-x-4">
                <MapPin className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-display font-bold mb-2 text-lg">
                    Endereço Completo
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Avenida José Bezerra Sobrinho<br />
                    Tamandaré - PE<br />
                    A 40 metros da praia
                  </p>
                  <a
                    href="https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre a localização"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-white font-semibold hover:underline"
                  >
                    Fale conosco →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location

