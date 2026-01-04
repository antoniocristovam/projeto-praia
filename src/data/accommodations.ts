// Dados das acomodações do Prive Beach

export interface AccommodationData {
  id: string;
  code: string;
  title: string;
  condominium: "Prive Beach" | "Prive Paraíso dos Carneiros";
  floor: "Térreo" | "1º Andar" | "2º Andar";
  available: boolean;
  images: string[];
  location: string;
  area: string;
  rooms: number;
  capacity: string;
  hasImages: boolean;
  airbnbUrl?: string; // Link do Airbnb
  icalUrl?: string; // Link do calendário iCal do Airbnb
  bookingUrl?: string; // Link do Booking.com (opcional)
}

// Importar imagens
import ap106img1 from "../assets/prive-beach-img/ap-106/img1.jpeg";
import ap106img2 from "../assets/prive-beach-img/ap-106/img2.jpeg";
import ap106img3 from "../assets/prive-beach-img/ap-106/img3.jpeg";
import ap106img4 from "../assets/prive-beach-img/ap-106/img4.jpeg";
import ap106img5 from "../assets/prive-beach-img/ap-106/img5.jpeg";

import ap103img1 from "../assets/prive-beach-img/ap-103/img1.jpeg";
import ap103img2 from "../assets/prive-beach-img/ap-103/img2.jpeg";
import ap103img3 from "../assets/prive-beach-img/ap-103/img3.jpeg";
import ap103img4 from "../assets/prive-beach-img/ap-103/img4.jpeg";

export const accommodations: AccommodationData[] = [
  {
    id: "ap-106",
    code: "AP-106",
    title: "Apartamento 106",
    condominium: "Prive Beach",
    floor: "1º Andar",
    available: true,
    images: [ap106img1, ap106img2, ap106img3, ap106img4, ap106img5],
    location:
      "Condomínio Prive Beach, Av. José Bezerra Sobrinho, Tamandaré - PE",
    area: "54 m²",
    rooms: 2,
    capacity: "Até 8 pessoas",
    hasImages: true,
    airbnbUrl: "https://www.airbnb.com.br/rooms/39025430",
    // Link iCal de TESTE - substitua pelo seu depois
    icalUrl:
      "https://www.airbnb.com.br/calendar/ical/39025430.ics?s=6e193fef21b04bbb6ab5a8e922e29afa",
    bookingUrl: "", // Cole o link do Booking aqui (opcional)
  },
  {
    id: "ap-103",
    code: "AP-103",
    title: "Apartamento 103",
    condominium: "Prive Beach",
    floor: "1º Andar",
    available: true,
    images: [ap103img1, ap103img2, ap103img3, ap103img4],
    location:
      "Condomínio Prive Beach, Av. José Bezerra Sobrinho, Tamandaré - PE",
    area: "54 m²",
    rooms: 2,
    capacity: "Até 8 pessoas",
    hasImages: true,
  },
  {
    id: "ap-06",
    code: "AP-06",
    title: "Apartamento 06",
    condominium: "Prive Beach",
    floor: "Térreo",
    available: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    ],
    location:
      "Condomínio Prive Beach, Av. José Bezerra Sobrinho, Tamandaré - PE",
    area: "54 m²",
    rooms: 2,
    capacity: "Até 8 pessoas",
    hasImages: false,
  },
  {
    id: "ap-104",
    code: "AP-104",
    title: "Apartamento 104",
    condominium: "Prive Beach",
    floor: "1º Andar",
    available: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    ],
    location:
      "Condomínio Prive Beach, Av. José Bezerra Sobrinho, Tamandaré - PE",
    area: "54 m²",
    rooms: 2,
    capacity: "Até 8 pessoas",
    hasImages: false,
  },
  {
    id: "ap-02",
    code: "AP-02",
    title: "Apartamento 02",
    condominium: "Prive Beach",
    floor: "Térreo",
    available: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    ],
    location:
      "Condomínio Prive Beach, Av. José Bezerra Sobrinho, Tamandaré - PE",
    area: "54 m²",
    rooms: 2,
    capacity: "Até 8 pessoas",
    hasImages: false,
  },
  {
    id: "ap-105",
    code: "AP-105",
    title: "Apartamento 105",
    condominium: "Prive Paraíso dos Carneiros",
    floor: "1º Andar",
    available: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    ],
    location:
      "Condomínio Prive Paraíso dos Carneiros, Praia dos Carneiros - PE",
    area: "54 m²",
    rooms: 2,
    capacity: "Até 8 pessoas",
    hasImages: false,
  },
];

// Informações comuns a todos os apartamentos
export const commonInfo = {
  location: "40 metros da praia, Av. José Bezerra Sobrinho, Tamandaré - PE",
  area: "54 m²",
  rooms: 2,
  capacity: "Até 8 pessoas",

  commonAmenities: [
    "02 Quiosques",
    "04 Churrasqueiras",
    "Banheiro",
    "Garagem com 01 vaga",
    "Internet Wi-Fi",
    "Piscina",
  ],

  internalAmenities: [
    "01 Quarto suíte com TV",
    "Sala com TV",
    "Cozinha Equipada",
    "Banheiro social",
    "Área de Serviço",
    "Internet Wi-Fi",
    "Varanda com churrasqueira",
  ],
};
