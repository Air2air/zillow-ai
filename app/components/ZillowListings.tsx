"use client"


import React, { useState, useEffect } from "react";
import axios from "axios";
import mockData from "../data/mockData.json";
import { SearchResults, Result } from "../types/types";

const ZillowListings = () => {
  const [listings, setListings] = useState<Result[]>([]);
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(true);

  useEffect(() => {
    if (useMockData) {
      const mockListings: SearchResults = mockData;
      setListings(mockListings.result);
    } else {
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
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response.data, "text/xml");
          const listings: SearchResults = {
            response: {
              results: {
                result: Array.from(xmlDoc.getElementsByTagName("response")),
              },
            },
          };
          setListings(listings.result);
        } catch (error) {
          setError(error.message);
        }
      };
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
        <div>Error: {error}</div>
      ) : (
        <ul>
          {listings.map((listing, index) => (
            <li key={index}>
              <h2>{listing.address.street}</h2>
              <p>
                {listing.address.city}, {listing.address.state}{" "}
                {listing.address.zipcode}
              </p>
              <p>Price: {listing.lastSoldPrice._}</p>
              <p>
                Zestimate: {listing.zestimate.amount._}{" "}
                {listing.zestimate.amount.currency}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ZillowListings;