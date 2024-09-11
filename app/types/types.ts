export interface Result {
  zpid: string;
  address: Address;
  agent: Agent;
  brokerage: Brokerage;
  listing: Listing;
  property: Property;
  school: School;
  neighborhood: Neighborhood;
  media: Media;
  energyEfficiency: EnergyEfficiency;
  accessibility: Accessibility;
  community: Community;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number | null;
  longitude: number | null;
}

export interface Agent {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface Brokerage {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface Listing {
  id: string;
  status: string;
  price: number | null;
  date: string;
  expirationDate: string;
}

export interface Property {
  type: string;
  yearBuilt: number | null;
  squareFootage: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parking: string;
  features: { text: string }[];
  appliances: { text: string }[];
  flooring: { text: string }[];
  lotSize: number | null;
}

export interface School {
  district: string;
  elementary: string;
  middle: string;
  high: string;
}

export interface Neighborhood {
  name: string;
  description: string;
}

export interface Media {
  photos: string[];
  virtualTours: string[];
  videos: string[];
}

export interface EnergyEfficiency {
  features: { text: string }[];
}

export interface Accessibility {
  features: { text: string }[];
}

export interface Community {
  features: { text: string }[];
}