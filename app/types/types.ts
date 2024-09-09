export interface Links {
  homedetails: string;
  graphsanddata: string;
  mapthishome: string;
  comparables: string;
}

export interface LastSoldPrice {
  currency: string;
  _: string;
}

export interface Zestimate {
  amount: {
    currency: string;
    _: string;
  };
  "last-updated": string;
  oneWeekChange: {
    deprecated: string;
  };
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface Result {
  zpid: string;
  links: Links;
  address: Address;
  FIPScounty: string;
  useCode: string;
  taxAssessmentYear: string;
  taxAssessment: string;
  yearBuilt: string;
  lotSizeSqFt: string;
  finishedSqFt: string;
  bathrooms: string;
  bedrooms: string;
  totalRooms: string;
  lastSoldDate: string;
  lastSoldPrice: LastSoldPrice;
  zestimate: Zestimate;
  zindexValue: string;
  overallType: string;
  overallTypeSource: string;
  parcelId: string;
}

export interface MockData {
  result: Result[];
}

