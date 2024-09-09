"use client";

import React, { useState, useEffect } from "react";

import axios from "axios";
import xmlJs from 'xml-js';

const ZillowListings = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(true);

  useEffect(() => {
    if (!useMockData) {
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
          const listings = xmlDoc.getElementsByTagName("response");
          setListings(Array.from(listings));
        } catch (error) {
          setError(error.message);
        }
      };
      fetchListings();
    } else {
      axios.get('../api/xml')
        .then(response => {
          setListings(response.data.response.results.result);
        })
        .catch(error => {
          setError(error.message);
        });
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
        <div>
          {listings.map((listing, index) => (
            <div key={index}>
              <p>
                {listing.address.street}, {listing.address.city},{" "}
                {listing.address.state} {listing.address.zipcode}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ZillowListings;