"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import sampleData from "../data/mockData.json";
import { Result } from "../types/types";
import ListResult from "./ListResult";

enum DataSource {
  API,
  SAMPLE,
}

/**
 * A functional component that displays a list of Zillow listings.
 * It allows the user to toggle between real data and sample data.
 * If an error occurs while fetching the data, it displays the error message.
 *
 * @return {JSX.Element} The JSX element representing the component.
 */
const ZillowListings = () => {
  const [dataSource, setDataSource] = useState(DataSource.SAMPLE);
  const [data, setData] = useState<Result[]>([]);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchApiData = useCallback(async () => {
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
      const apiData: Result[] = response.data;
      setData(apiData);
      setDataFetched(true);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const loadSampleData = useCallback(() => {
    setData(sampleData.result);
    setDataFetched(true);
  }, []);

  const toggleDataSource = useCallback(() => {
    setDataSource((prevState) =>
      prevState === DataSource.API ? DataSource.SAMPLE : DataSource.API
    );
    setDataFetched(false);
    if (dataSource === DataSource.API) {
      loadSampleData();
    } else {
      fetchApiData();
    }
  }, [dataSource, loadSampleData, fetchApiData]);

  useEffect(() => {
    if (dataSource === DataSource.API) {
      fetchApiData();
    } else {
      loadSampleData();
    }
  }, [dataSource, loadSampleData, fetchApiData]);

  return (
    <>
      <h1>Zillow Listings</h1>
      <button onClick={toggleDataSource}>
        {dataSource === DataSource.API ? "Use Sample Data" : "Use API Data"}
      </button>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col w-full ">
          {dataFetched &&
            Array.isArray(data) &&
            data.map((listing: Result) => (
              <ListResult key={listing.zpid} listing={listing} />
            ))}
        </div>
      )}
    </>
  );
};

export default ZillowListings;
