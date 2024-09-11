"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import listingData from "../data/listing.json";
import { Result } from "../types/types";
import ListResult from "./ListResult";

enum DataSource {
  API,
  SAMPLE,
}

const ZillowListings = () => {
  const [dataSource, setDataSource] = useState(DataSource.SAMPLE);
  const [data, setData] = useState<Result[]>([]);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchApiData = useCallback(async () => {
    try {
      const response = await axios.get("/data/listing.json");
      const apiData: Result[] = response.data;
      setData(apiData);
      setDataFetched(true);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const loadSampleData = useCallback(() => {
    setData(listingData);
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
  }, [dataSource, fetchApiData, loadSampleData]);

  return (
    <div>
      <button onClick={toggleDataSource}>
        {dataSource === DataSource.API
          ? "Switch to Sample Data"
          : "Switch to API Data"}
      </button>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((result) => (
            <ListResult key={result.zpid} listing={result} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ZillowListings;
