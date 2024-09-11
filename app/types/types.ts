export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
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
  price: number;
  date: string;
  expirationDate: string;
}

export interface Property {
  type: string;
  yearBuilt: number;
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  parking: string;
  features: string[];
  appliances: string[];
  flooring: string[];
  lotSize: number;
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
  features: string[];
}

export interface Accessibility {
  features: string[];
}

export interface Community {
  features: string[];
}

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