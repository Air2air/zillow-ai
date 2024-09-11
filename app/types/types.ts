export type TextArray = { text: string }[];

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude: number | null;
  longitude: number | null;
}

export interface Property {
  type: string;
  yearBuilt: number | null;
  squareFootage: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parking: string;
  features: TextArray;
  appliances: TextArray;
  flooring: TextArray;
  lotSize: number | null;
}

export interface Result {
  zpid: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    latitude: number | null;
    longitude: number | null;
  };
  agent: {
    name: string;
    phoneNumber: string;
    email: string;
  };
  brokerage: {
    name: string;
    phoneNumber: string;
    email: string;
  };
  listing: {
    id: string;
    status: string;
    price: number | null;
    date: string;
    expirationDate: string;
  };
  property: {
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
  };
  school: {
    district: string;
    elementary: string;
    middle: string;
    high: string;
  };
  neighborhood: {
    name: string;
    description: string;
  };
  media: {
    photos: string[];
    virtualTours: string[];
    videos: string[];
  };
  energyEfficiency: {
    features: { text: string }[];
  };
  accessibility: {
    features: { text: string }[];
  };
  community: {
    features: { text: string }[];
  };
}