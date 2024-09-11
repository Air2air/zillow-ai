"use client";

import React from "react";
import { Result } from "../types/types";

const ListResult = ({ listing }: { listing: Result }) => {
  return (
    <div className="list-result-item">
      <div className="list-result-row">
        <div className="flex text-left">
          <h3>
            {listing.address.street}, {listing.address.city},{" "}
            {listing.address.state} {listing.address.zip}
          </h3>
        </div>
        <div className="flex text-right">
          <h3>${listing.listing.price}</h3>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Bedrooms:</div>
          <div className="value">{listing.property.bedrooms}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Bathrooms:</div>
          <div className="value">{listing.property.bathrooms}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Square Footage:</div>
          <div className="value">{listing.property.squareFootage}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Year Built:</div>
          <div className="value">{listing.property.yearBuilt}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Type:</div>
          <div className="value">{listing.property.type}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Lot Size:</div>
          <div className="value">{listing.property.lotSize}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Listing Status:</div>
          <div className="value">{listing.listing.status}</div>
        </div>
        <div className="flex text-left">
          <div className="label">MLS ID:</div>
          <div className="value">{listing.listing.id}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Agent:</div>
          <div className="value">{listing.agent.name}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Brokerage:</div>
          <div className="value">{listing.brokerage.name}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">School District:</div>
          <div className="value">{listing.school.district}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Elementary School:</div>
          <div className="value">{listing.school.elementary}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Middle School:</div>
          <div className="value">{listing.school.middle}</div>
        </div>
        <div className="flex text-left">
          <div className="label">High School:</div>
          <div className="value">{listing.school.high}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Neighborhood:</div>
          <div className="value">{listing.neighborhood.name}</div>
        </div>
        <div className="flex text-left">
          <div className="label">Description:</div>
          <div className="value">{listing.neighborhood.description}</div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Features:</div>
          <div className="value">
            {listing.property.features.map((feature, index) => (
              <span key={index}>{feature.text}, </span>
            ))}
          </div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Appliances:</div>
          <div className="value">
            {listing.property.appliances.map((appliance, index) => (
              <span key={index}>{appliance.text}, </span>
            ))}
          </div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Flooring:</div>
          <div className="value">
            {listing.property.flooring.map((flooring, index) => (
              <span key={index}>{flooring.text}, </span>
            ))}
          </div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Energy Efficiency:</div>
          <div className="value">
            {listing.energyEfficiency.features.map((feature, index) => (
              <span key={index}>{feature.text}, </span>
            ))}
          </div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Accessibility:</div>
          <div className="value">
            {listing.accessibility.features.map((feature, index) => (
              <span key={index}>{feature.text}, </span>
            ))}
          </div>
        </div>
      </div>

      <div className="list-result-row">
        <div className="flex text-left">
          <div className="label">Community:</div>
          <div className="value">
            {listing.community.features.map((feature, index) => (
              <span key={index}>{feature.text}, </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListResult;
