export interface Agent {
  name: string;
  phone: string;
  email: string;
}

export interface Broker {
  name: string;
  phone: string;
  email: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface Result {
  zpid: string;
  address: Address;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  type: string;
  lotSize: number;
  agentName: string;
  brokerName: string;
  listingStatus: string;
  mlsId: string;
  source: string;
  updated: string;
  agentPhone: string;
  agentEmail: string;
  brokerPhone: string;
  brokerEmail: string;
  listingDescription: string;
  features: string[];
  appliances: string[];
  flooring: string[];
  parking: string[];
  schoolDistrict: string;
  elementarySchool: string;
  middleSchool: string;
  highSchool: string;
}

export interface Appliances {
  appliance: string;
}

export interface Flooring {
  type: string;
}

export interface Parking {
  type: string;
}

export interface SchoolDistrict {
  name: string;
}

export interface ElementarySchool {
  name: string;
}

export interface MiddleSchool {
  name: string;
}

export interface HighSchool {
  name: string;
}

export interface MockData {
  result: Result[];
}