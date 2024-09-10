"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import mockData from "../data/mockData.json";
import { MockData, Result } from "../types/types";
import ListResult from "./ListResult";

const ZillowListings = () => {
  const [listings, setListings] = useState<MockData>({ result: [] });
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchListings = useCallback(async () => {
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
      setDataFetched(true);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const loadMockData = useCallback(() => {
    setListings(mockData);
    setDataFetched(true);
  }, []);

  const toggleMockData = useCallback(() => {
    setUseMockData((prevState) => !prevState);
    setDataFetched(false);
    if (!useMockData) {
      loadMockData();
    } else {
      fetchListings();
    }
  }, [useMockData, loadMockData, fetchListings]);

  useEffect(() => {
    if (useMockData) {
      loadMockData();
    } else {
      fetchListings();
    }
  }, [useMockData, loadMockData, fetchListings]);

  return (
    <>
      <h1>Zillow Listings</h1>
      <button onClick={toggleMockData}>
        {useMockData ? "Use Real Data" : "Use Mock Data"}
      </button>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col w-full ">
          {dataFetched &&
            Array.isArray(listings.result) &&
            listings.result.map((listing: Result) => (
              <ListResult key={listing.zpid} listing={listing} />
            ))}
        </div>
      )}
    </>
  );
};

export default ZillowListings;