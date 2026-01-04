import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react'
import { useState, useEffect } from 'react'

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  apartmentCode: string
  apartmentTitle: string
  initialIndex?: number
}

const GalleryModal = ({ 
  isOpen, 
  onClose, 
  images, 
  apartmentCode, 
  apartmentTitle,
  initialIndex = 0 
}: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Reset index quando abre
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  // Navegação com teclado
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') previousImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  // Prevenir scroll do body quando modal aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${apartmentTitle} - Prive Beach`,
          text: `Confira as fotos do ${apartmentCode}`,
          url: window.location.href
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="text-white">
              <h2 className="text-xl md:text-2xl font-display font-bold">
                {apartmentTitle}
              </h2>
              <p className="text-sm md:text-base text-white/80">
                {apartmentCode} • Foto {currentIndex + 1} de {images.length}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Share Button */}
              {navigator.share && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleShare()
                  }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Compartilhar"
                >
                  <Share2 size={20} />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Fechar galeria"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div 
          className="absolute inset-0 flex items-center justify-center p-4 md:p-20"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            src={images[currentIndex]}
            alt={`${apartmentTitle} - Foto ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                previousImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-white hover:scale-110"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-white hover:scale-110"
              aria-label="Próxima foto"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(index)
                    }}
                    className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all ${
                      index === currentIndex
                        ? 'ring-4 ring-white scale-105'
                        : 'ring-2 ring-white/30 hover:ring-white/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-white/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Instructions (mobile) */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 md:hidden">
          <p className="text-white/60 text-sm text-center px-4">
            Toque nas setas ou arraste para navegar
          </p>
        </div>

        {/* Instructions (desktop) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-32 hidden md:block pointer-events-none">
          <p className="text-white/40 text-sm">
            Use as setas do teclado ou clique nas setas para navegar • ESC para fechar
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GalleryModal

