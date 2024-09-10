"use client";

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
    }
  }, [useMockData]);
  
  useEffect(() => {
    if (!useMockData) {
      fetchListings();
    }
  }, [useMockData]);

  const toggleMockData = () => {
    setUseMockData(prevState => !prevState);
  };

  return (
    <>
      <h1>Zillow Listings</h1>
      <button onClick={toggleMockData}>
        {useMockData ? "Use Real Data" : "Use Mock Data"}
      </button>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col w-full bg-red-200">
          {Array.isArray(listings.result) &&
            listings.result.map((listing) => (
              <div
                key={listing.zpid}
                className="flex w-full justify-evenly text-left  bg-sky-200 py-2"
              >
                <div>{listing.address.street}</div>
                <div>{listing.address.city}</div>
                <div>{listing.address.state}</div>
                <div>{listing.address.zipcode}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ZillowListings;
