interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Links {
  homedetails: string;
  graphsanddata: string;
  mapthishome: string;
  comparables: string;
}

interface LastSoldPrice {
  currency: string;
  _: string;
}

interface Zestimate {
  amount: {
    currency: string;
    _: string;
  };
  "last-updated": string;
  oneWeekChange: {
    deprecated: string;
  };
}

interface Result {
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

interface Response {
  results: {
    result: Result[];
  };
}

interface SearchResults {
  response: Response;
}