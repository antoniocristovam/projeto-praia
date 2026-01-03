export interface Accommodation {
  id: string
  title: string
  subtitle: string
  description: string
  location: string
  area: string
  rooms: number
  capacity: number
  floors: string[]
  images: string[]
  commonAmenities: Amenity[]
  internalAmenities: Amenity[]
  price?: number
  available: boolean
}

export interface Amenity {
  icon: string
  label: string
  description?: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface SocialLinks {
  instagram?: string
  facebook?: string
  whatsapp: string
}

