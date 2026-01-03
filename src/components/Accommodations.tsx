import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Bed, 
  Users, 
  Wifi, 
  Car, 
  Waves,
  Tv,
  UtensilsCrossed,
  Wind,
  MapPin,
  Maximize,
  Building2,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react'
import { accommodations, commonInfo } from '../data/accommodations'

const Accommodations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Separar apartamentos por condomínio
  const priveBeachApts = accommodations.filter(apt => apt.condominium === 'Prive Beach')
  const priveParaisoApts = accommodations.filter(apt => apt.condominium === 'Prive Paraíso dos Carneiros')

  const [activeTab, setActiveTab] = useState<'beach' | 'carneiros'>('beach')
  const [selectedApartment, setSelectedApartment] = useState(priveBeachApts[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Determinar apartamentos ativos baseado na tab
  const activeApartments = activeTab === 'beach' ? priveBeachApts : priveParaisoApts

  const commonAmenities = [
    { icon: Building2, label: '02 Quiosques' },
    { icon: UtensilsCrossed, label: '04 Churrasqueiras' },
    { icon: Wind, label: 'Banheiro Completo' },
    { icon: Car, label: '01 Vaga de Garagem' },
    { icon: Wifi, label: 'Internet Wi-Fi' },
    { icon: Waves, label: 'Piscina Exclusiva' },
  ]

  const internalAmenities = [
    { icon: Bed, label: '01 Quarto Suíte com TV' },
    { icon: Tv, label: 'Sala com TV' },
    { icon: UtensilsCrossed, label: 'Cozinha Equipada' },
    { icon: Wind, label: 'Banheiro Social' },
    { icon: Wind, label: 'Área de Serviço' },
    { icon: Wifi, label: 'Internet Wi-Fi' },
    { icon: UtensilsCrossed, label: 'Varanda com Churrasqueira' },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedApartment.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedApartment.images.length - 1 : prev - 1
    )
  }

  const handleApartmentChange = (apartment: typeof accommodations[0]) => {
    setSelectedApartment(apartment)
    setCurrentImageIndex(0)
  }

  const handleTabChange = (tab: 'beach' | 'carneiros') => {
    setActiveTab(tab)
    // Selecionar primeiro apartamento da nova tab
    const newApts = tab === 'beach' ? priveBeachApts : priveParaisoApts
    setSelectedApartment(newApts[0])
    setCurrentImageIndex(0)
  }

  return (
    <section id="accommodations" className="py-20 md:py-32 bg-white">
      <div className="section-padding container-width" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-ocean-600 font-semibold text-sm md:text-base uppercase tracking-wider">
            Nossas Acomodações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mt-4 mb-6">
            Escolha seu
            <span className="text-gradient"> apartamento ideal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Apartamentos completos em dois destinos paradisíacos: Tamandaré e Praia dos Carneiros.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-2">
            <button
              onClick={() => handleTabChange('beach')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'beach'
                  ? 'gradient-ocean text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg">🏖️ Prive Beach</span>
                <span className="text-xs opacity-90">Tamandaré • {priveBeachApts.length} APs</span>
              </div>
            </button>
            <button
              onClick={() => handleTabChange('carneiros')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'carneiros'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg">🌴 Prive Paraíso</span>
                <span className="text-xs opacity-90">Carneiros • {priveParaisoApts.length} AP</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            activeTab === 'beach' 
              ? 'bg-ocean-50 text-ocean-700' 
              : 'bg-green-50 text-green-700'
          }`}>
            <MapPin size={18} />
            <span className="font-medium">
              {activeTab === 'beach' 
                ? '📍 Tamandaré - PE • A 40 metros da praia'
                : '📍 Praia dos Carneiros - PE • Paraíso tropical'
              }
            </span>
          </div>
        </motion.div>

        {/* Apartment Selector */}
        <motion.div
          key={`selector-${activeTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {activeApartments.map((apt, index) => (
              <button
                key={apt.id}
                onClick={() => handleApartmentChange(apt)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedApartment.id === apt.id
                    ? activeTab === 'beach'
                      ? 'gradient-ocean text-white shadow-lg scale-105'
                      : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {apt.code}
                {apt.hasImages && (
                  <span className="ml-2 text-xs">📸</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Apartment Card */}
        <motion.div
          key={selectedApartment.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl overflow-hidden shadow-2xl mb-12 ${
            activeTab === 'beach' 
              ? 'bg-gradient-to-br from-sand-50 to-white'
              : 'bg-gradient-to-br from-green-50 to-white'
          }`}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="relative h-64 lg:h-auto min-h-[400px] group">
              <img
                src={selectedApartment.images[currentImageIndex]}
                alt={`${selectedApartment.title} - Foto ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg text-white ${
                  activeTab === 'beach' ? 'bg-ocean-600' : 'bg-green-600'
                }`}>
                  {selectedApartment.code}
                </span>
                {selectedApartment.hasImages && (
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2 text-white ${
                    activeTab === 'beach' ? 'bg-emerald-600' : 'bg-emerald-600'
                  }`}>
                    <ImageIcon size={14} />
                    Fotos Reais
                  </span>
                )}
              </div>

              {/* Gallery Navigation */}
              {selectedApartment.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="text-gray-800" size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="text-gray-800" size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedApartment.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ver foto ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  {selectedApartment.title}
                </h3>
                <p className={`text-lg font-semibold ${
                  activeTab === 'beach' ? 'text-ocean-600' : 'text-green-600'
                }`}>
                  {selectedApartment.condominium}
                </p>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === 'beach' ? 'bg-ocean-100' : 'bg-green-100'
                  }`}>
                    <Maximize className={activeTab === 'beach' ? 'text-ocean-600' : 'text-green-600'} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Área</p>
                    <p className="font-semibold text-gray-900">{selectedApartment.area}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === 'beach' ? 'bg-ocean-100' : 'bg-green-100'
                  }`}>
                    <Bed className={activeTab === 'beach' ? 'text-ocean-600' : 'text-green-600'} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Quartos</p>
                    <p className="font-semibold text-gray-900">{selectedApartment.rooms}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === 'beach' ? 'bg-ocean-100' : 'bg-green-100'
                  }`}>
                    <Users className={activeTab === 'beach' ? 'text-ocean-600' : 'text-green-600'} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Capacidade</p>
                    <p className="font-semibold text-gray-900">{selectedApartment.capacity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === 'beach' ? 'bg-ocean-100' : 'bg-green-100'
                  }`}>
                    <Building2 className={activeTab === 'beach' ? 'text-ocean-600' : 'text-green-600'} size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Andar</p>
                    <p className="font-semibold text-gray-900 text-sm">{selectedApartment.floor}</p>
                  </div>
                </div>
              </div>

              <div className={`flex items-start space-x-3 p-4 rounded-xl ${
                activeTab === 'beach' ? 'bg-ocean-50' : 'bg-green-50'
              }`}>
                <MapPin className={`flex-shrink-0 mt-1 ${
                  activeTab === 'beach' ? 'text-ocean-600' : 'text-green-600'
                }`} size={20} />
                <p className="text-gray-700 text-sm">{selectedApartment.location}</p>
              </div>

              <a
                href={`https://wa.me/5500000000000?text=Olá! Gostaria de reservar o ${selectedApartment.code} no ${selectedApartment.condominium}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full text-center px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  activeTab === 'beach'
                    ? 'gradient-ocean'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600'
                }`}
              >
                Reservar {selectedApartment.code}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Amenities Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Common Area Amenities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Comodidades - Área Comum
            </h3>
            <div className="space-y-4">
              {commonAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-ocean-50 flex items-center justify-center group-hover:bg-ocean-100 transition-colors">
                    <amenity.icon className="text-ocean-600" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{amenity.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Internal Amenities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Comodidades - Área Interna
            </h3>
            <div className="space-y-4">
              {internalAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sand-100 flex items-center justify-center group-hover:bg-sand-200 transition-colors">
                    <amenity.icon className="text-ocean-700" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{amenity.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Accommodations
