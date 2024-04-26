import React from "react";
import "./Status.scss";

const RatingScale = ({ rating, title, description }) => {
  const labels = [
    { label: "Unideal", range: [0, 25] },
    { label: "Average", range: [26, 50] },
    { label: "Good", range: [51, 75] },
    { label: "Great", range: [76, 100] },
  ];

  const currentLabel = labels.find(
    (label) => rating >= label.range[0] && rating < label.range[1]
  );

  return (
    <div className="scaling-container">
      <h3 className="rating-title">{title}</h3>
      <div className="rating-scale-subcontainer">
        <div className="status-labels">
          {labels.map((label) => (
            <div className="status-label-item" key={label.label}>
              <span
                className={`status-label ${
                  currentLabel?.label === label.label ? "highlight" : ""
                }`}
              >
                {label.label}
              </span>
              <div className="status-bar"></div>
            </div>
          ))}
        </div>
        <div
          className="status-indicator"
          style={{ left: `calc(${rating}% )` }}
        ></div>
        <div className="rating-description">{description}</div>
      </div>
    </div>
  );
};

const Status = ({ sellerRating, buyerRating }) => {
  const sellerDescription = `Total of 5 items were successfully sold, 5 positive reviews received, 0 disputes.`;
  const buyerDescription = `Total of 6 positive reviews received, 0 disputes.`;

  return (
    <div className="status-container">
      <RatingScale
        rating={sellerRating}
        title="Seller Rating"
        description={sellerDescription}
      />
      <RatingScale
        rating={buyerRating}
        title="Buyer Rating"
        description={buyerDescription}
      />
      <button className="status-button">Read about how status works</button>
    </div>
  );
};

export default Status;
