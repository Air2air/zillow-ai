// ListResult.js
import React from "react";
import { Result } from "../types/types";

const ListResult = ({ listing }: { listing: Result }) => {
  return (
    <div className="list-result-item">
      <div className="list-result-row">
        <div className="flex text-left">
          <h3>
            {listing.address.street}, {listing.address.city},{" "}
            {listing.address.state} {listing.address.zipcode}
          </h3>
        </div>
        <div className="flex text-right">
          <h3>{listing.price}</h3>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Bedrooms:</div>
          <div className="value">{listing.bedrooms}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Bathrooms:</div>
          <div className="value">{listing.bathrooms}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Square Footage:</div>
          <div className="value">{listing.sqft}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Year Built:</div>
          <div className="value">{listing.yearBuilt}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Type:</div>
          <div className="value">{listing.type}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Lot Size:</div>
          <div className="value">{listing.lotSize}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Listing Status:</div>
          <div className="value">{listing.listingStatus}</div>
        </div>
        <div className="flex text-left">
          <div className="label">MLS ID:</div>
          <div className="value">{listing.mlsId}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Listing Description:</div>
          <div className="value">{listing.listingDescription}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Features:</div>
          {listing.features.map((feature) => (
            <div key={feature}>{feature}</div>
          ))}
        </div>
        <div className="flex text-left">
          <div className="label">Appliances:</div>
          {listing.appliances.map((appliance, index) => (
            <div key={index}>{appliance}</div>
          ))}
        </div>
        <div className="flex text-left">
          <div className="label">Flooring:</div>
          {listing.flooring.map((floor) => (
            <div key={floor}>{floor}</div>
          ))}
        </div>
        <div className="flex text-left">
          <div className="label">Parking:</div>
          {listing.parking.map((park) => (
            <div key={park}>{park}</div>
          ))}
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Source:</div>
          <div className="value">{listing.source}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Updated:</div>
          <div className="value">{listing.updated}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Broker Name:</div>
          <div className="value">{listing.brokerName}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Broker Phone:</div>
          <div className="value">{listing.brokerPhone}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Broker Email:</div>
          <div className="value">{listing.brokerEmail}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Source:</div>
          <div className="value">{listing.source}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Updated:</div>
          <div className="value">{listing.updated}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Agent Name:</div>
          <div className="value">{listing.agentName}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Agent Phone:</div>
          <div className="value">{listing.agentPhone}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Agent Email:</div>
          <div className="value">{listing.agentEmail}</div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
