import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  Image as ImageIcon,
  Maximize2,
} from "lucide-react";
import { accommodations } from "../data/accommodations";
import GalleryModal from "./GalleryModal";
import AvailabilityCalendar from "./AvailabilityCalendar";

const Accommodations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Separar apartamentos por condomínio
  const priveBeachApts = accommodations.filter(
    (apt) => apt.condominium === "Prive Beach"
  );
  const priveParaisoApts = accommodations.filter(
    (apt) => apt.condominium === "Prive Paraíso dos Carneiros"
  );

  const [activeTab, setActiveTab] = useState<"beach" | "carneiros">("beach");
  const [selectedApartment, setSelectedApartment] = useState(priveBeachApts[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  // Determinar apartamentos ativos baseado na tab
  const activeApartments =
    activeTab === "beach" ? priveBeachApts : priveParaisoApts;

  const commonAmenities = [
    { icon: Building2, label: "02 Quiosques" },
    { icon: UtensilsCrossed, label: "04 Churrasqueiras" },
    { icon: Wind, label: "Banheiro Completo" },
    { icon: Car, label: "01 Vaga de Garagem" },
    { icon: Wifi, label: "Internet Wi-Fi" },
    { icon: Waves, label: "Piscina Exclusiva" },
  ];

  const internalAmenities = [
    { icon: Bed, label: "01 Quarto Suíte com TV" },
    { icon: Tv, label: "Sala com TV" },
    { icon: UtensilsCrossed, label: "Cozinha Equipada" },
    { icon: Wind, label: "Banheiro Social" },
    { icon: Wind, label: "Área de Serviço" },
    { icon: Wifi, label: "Internet Wi-Fi" },
    { icon: UtensilsCrossed, label: "Varanda com Churrasqueira" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedApartment.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedApartment.images.length - 1 : prev - 1
    );
  };

  const handleApartmentChange = (apartment: (typeof accommodations)[0]) => {
    setSelectedApartment(apartment);
    setCurrentImageIndex(0);
  };

  const handleTabChange = (tab: "beach" | "carneiros") => {
    setActiveTab(tab);
    // Selecionar primeiro apartamento da nova tab
    const newApts = tab === "beach" ? priveBeachApts : priveParaisoApts;
    setSelectedApartment(newApts[0]);
    setCurrentImageIndex(0);
  };

  const openGallery = (index: number = 0) => {
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

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
            Apartamentos completos em dois destinos paradisíacos: Tamandaré e
            Praia dos Carneiros.
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
              onClick={() => handleTabChange("beach")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "beach"
                  ? "gradient-ocean text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg">🏖️ Prive Beach</span>
                <span className="text-xs opacity-90">
                  Tamandaré • {priveBeachApts.length} APs
                </span>
              </div>
            </button>
            <button
              onClick={() => handleTabChange("carneiros")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "carneiros"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg">🌴 Prive Paraíso</span>
                <span className="text-xs opacity-90">
                  Carneiros • {priveParaisoApts.length} AP
                </span>
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
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              activeTab === "beach"
                ? "bg-ocean-50 text-ocean-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            <MapPin size={18} />
            <span className="font-medium">
              {activeTab === "beach"
                ? "📍 Tamandaré - PE • A 40 metros da praia"
                : "📍 Praia dos Carneiros - PE • Paraíso tropical"}
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
            {activeApartments.map((apt) => (
              <button
                key={apt.id}
                onClick={() => handleApartmentChange(apt)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedApartment.id === apt.id
                    ? activeTab === "beach"
                      ? "gradient-ocean text-white shadow-lg scale-105"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {apt.code}
                {apt.hasImages && <span className="ml-2 text-xs">📸</span>}
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
            activeTab === "beach"
              ? "bg-gradient-to-br from-sand-50 to-white"
              : "bg-gradient-to-br from-green-50 to-white"
          }`}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="relative h-64 lg:h-auto min-h-[400px] group">
              <img
                src={selectedApartment.images[currentImageIndex]}
                alt={`${selectedApartment.title} - Foto ${
                  currentImageIndex + 1
                }`}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                onClick={() => openGallery(currentImageIndex)}
              />

              {/* Ver Galeria Button */}
              <button
                onClick={() => openGallery(currentImageIndex)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-xl flex items-center gap-2"
              >
                <Maximize2 size={20} />
                Ver Todas as Fotos ({selectedApartment.images.length})
              </button>

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg text-white ${
                    activeTab === "beach" ? "bg-ocean-600" : "bg-green-600"
                  }`}
                >
                  {selectedApartment.code}
                </span>
                {selectedApartment.hasImages && (
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2 text-white ${
                      activeTab === "beach"
                        ? "bg-emerald-600"
                        : "bg-emerald-600"
                    }`}
                  >
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
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
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
                <p
                  className={`text-lg font-semibold ${
                    activeTab === "beach" ? "text-ocean-600" : "text-green-600"
                  }`}
                >
                  {selectedApartment.condominium}
                </p>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === "beach" ? "bg-ocean-100" : "bg-green-100"
                    }`}
                  >
                    <Maximize
                      className={
                        activeTab === "beach"
                          ? "text-ocean-600"
                          : "text-green-600"
                      }
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Área</p>
                    <p className="font-semibold text-gray-900">
                      {selectedApartment.area}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === "beach" ? "bg-ocean-100" : "bg-green-100"
                    }`}
                  >
                    <Bed
                      className={
                        activeTab === "beach"
                          ? "text-ocean-600"
                          : "text-green-600"
                      }
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Quartos</p>
                    <p className="font-semibold text-gray-900">
                      {selectedApartment.rooms}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === "beach" ? "bg-ocean-100" : "bg-green-100"
                    }`}
                  >
                    <Users
                      className={
                        activeTab === "beach"
                          ? "text-ocean-600"
                          : "text-green-600"
                      }
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Capacidade</p>
                    <p className="font-semibold text-gray-900">
                      {selectedApartment.capacity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === "beach" ? "bg-ocean-100" : "bg-green-100"
                    }`}
                  >
                    <Building2
                      className={
                        activeTab === "beach"
                          ? "text-ocean-600"
                          : "text-green-600"
                      }
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Andar</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {selectedApartment.floor}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`flex items-start space-x-3 p-4 rounded-xl ${
                  activeTab === "beach" ? "bg-ocean-50" : "bg-green-50"
                }`}
              >
                <MapPin
                  className={`flex-shrink-0 mt-1 ${
                    activeTab === "beach" ? "text-ocean-600" : "text-green-600"
                  }`}
                  size={20}
                />
                <p className="text-gray-700 text-sm">
                  {selectedApartment.location}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Linha 1: Galeria e Ver Disponibilidade */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openGallery(0)}
                    className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2 flex items-center justify-center gap-2 ${
                      activeTab === "beach"
                        ? "border-ocean-600 text-ocean-600 hover:bg-ocean-50"
                        : "border-green-600 text-green-600 hover:bg-green-50"
                    }`}
                  >
                    <Maximize2 size={18} />
                    Ver Galeria ({selectedApartment.images.length})
                  </button>

                  {(selectedApartment.airbnbUrl ||
                    selectedApartment.icalUrl) && (
                    <AvailabilityCalendar
                      icalUrl={selectedApartment.icalUrl}
                      airbnbUrl={selectedApartment.airbnbUrl}
                      apartmentCode={selectedApartment.code}
                    />
                  )}
                </div>

                {/* Linha 2: Botões de Reserva */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedApartment.airbnbUrl && (
                    <a
                      href={selectedApartment.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[#FF385C] to-[#E31C5F] flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                      >
                        <path d="M16 1c2.008 0 3.463 1.155 4.954 3.24 1.491 2.085 3.042 5.045 5.436 9.162 2.393 4.117 3.61 7.038 3.61 9.598 0 5.523-4.477 10-10 10s-10-4.477-10-10c0-2.56 1.217-5.481 3.61-9.598 2.394-4.117 3.945-7.077 5.436-9.162C12.537 2.155 13.992 1 16 1zm0 2c-.908 0-1.867.846-3.178 2.642-1.31 1.797-2.806 4.617-5.138 8.618-2.332 4.002-3.684 6.843-3.684 9.74 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.897-1.352-5.738-3.684-9.74-2.332-4.001-3.828-6.821-5.138-8.618C17.867 3.846 16.908 3 16 3z" />
                      </svg>
                      Reservar no Airbnb
                    </a>
                  )}

                  <a
                    href={`https://wa.me/5500000000000?text=Olá! Gostaria de reservar o ${selectedApartment.code} no ${selectedApartment.condominium}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center px-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 ${
                      activeTab === "beach"
                        ? "gradient-ocean"
                        : "bg-gradient-to-r from-green-600 to-emerald-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Reservar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Modal */}
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={selectedApartment.images}
          apartmentCode={selectedApartment.code}
          apartmentTitle={selectedApartment.title}
          initialIndex={galleryStartIndex}
        />

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
                  <span className="text-gray-700 font-medium">
                    {amenity.label}
                  </span>
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
                  <span className="text-gray-700 font-medium">
                    {amenity.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
