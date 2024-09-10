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
          <strong>Bedrooms:</strong>
          <div>{listing.bedrooms}</div>
        </div>
        <div className="flex text-left">
          <strong>Bathrooms:</strong>
          <div>{listing.bathrooms}</div>
        </div>
        <div className="flex text-left">
          <strong>Square Footage:</strong>
          <div>{listing.sqft}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <strong>Year Built:</strong>
          <div>{listing.yearBuilt}</div>
        </div>
        <div className="flex text-left">
          <strong>Type:</strong>
          <div>{listing.type}</div>
        </div>
        <div className="flex text-left">
          <strong>Lot Size:</strong>
          <div>{listing.lotSize}</div>
        </div>
        <div className="flex text-left">
          <strong>Listing Status:</strong>
          <div>{listing.listingStatus}</div>
        </div>
        <div className="flex text-left">
          <strong>MLS ID:</strong>
          <div>{listing.mlsId}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <strong>Listing Description:</strong>
          <div>{listing.listingDescription}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <strong>Features:</strong>
          {listing.features.map((feature) => (
            <div key={feature}>{feature}</div>
          ))}
        </div>
        <div className="flex text-left">
          <strong>Appliances:</strong>
          {listing.appliances.map((appliance, index) => (
            <div key={index}>{appliance}</div>
          ))}
        </div>
        <div className="flex text-left">
          <strong>Flooring:</strong>
          {listing.flooring.map((floor) => (
            <div key={floor}>{floor}</div>
          ))}
        </div>
        <div className="flex text-left">
          <strong>Parking:</strong>
          {listing.parking.map((park) => (
            <div key={park}>{park}</div>
          ))}
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <strong>Source:</strong>
          <div>{listing.source}</div>
        </div>
        <div className="flex text-left">
          <strong>Updated:</strong>
          <div>{listing.updated}</div>
        </div>
        <div className="flex text-left">
          <strong>Broker Name:</strong>
          <div>{listing.brokerName}</div>
        </div>
        <div className="flex text-left">
          <strong>Broker Phone:</strong>
          <div>{listing.brokerPhone}</div>
        </div>
        <div className="flex text-left">
          <strong>Broker Email:</strong>
          <div>{listing.brokerEmail}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <strong>Source:</strong>
          <div>{listing.source}</div>
        </div>
        <div className="flex text-left">
          <strong>Updated:</strong>
          <div>{listing.updated}</div>
        </div>
        <div className="flex text-left">
          <strong>Agent Name:</strong>
          <div>{listing.agentName}</div>
        </div>
        <div className="flex text-left">
          <strong>Agent Phone:</strong>
          <div>{listing.agentPhone}</div>
        </div>
        <div className="flex text-left">
          <strong>Agent Email:</strong>
          <div>{listing.agentEmail}</div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
