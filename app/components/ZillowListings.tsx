"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import mockData from "../data/mockData.json";
import { MockData, Result } from "../types/types";

const ZillowListings = () => {
  const [listings, setListings] = useState<MockData>({ result: [] });
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(true);

  const fetchListings = async () => {
    try {
      const response = await axios.get(
        "https://www.zillow.com/webservice/GetDeepSearchResults.htm",
        {
          params: {
            "zws-id": "YOUR_ZILLOW_API_KEY",
            citystatezip: "New York, NY",
          },
        }
      );
      const data: MockData = response.data;
      setListings(data);
    } catch (error: any) {
      setError(error.message);
    }
  };
  
  useEffect(() => {
    if (useMockData) {
      setListings(mockData);
    } else {
      fetchListings();
    }
  }, [useMockData]);
  
  const toggleMockData = () => {
    setUseMockData(!useMockData);
  };

  return (
    <div>
      <h1>Zillow Listings</h1>
      <button onClick={toggleMockData}>
        {useMockData ? "Use Real Data" : "Use Mock Data"}
      </button>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {Array.isArray(listings.result) && listings.result.map((listing) => (
            <li key={listing.zpid}>
              <p>{listing.address.street}</p>
              <p>{listing.address.city}</p>
              <p>{listing.address.state}</p>
              <p>{listing.address.zipcode}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ZillowListings;