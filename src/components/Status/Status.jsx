import React from 'react';
import './Status.scss';

const RatingScale = ({ rating, title, description }) => {
  const labels = [
    { label: 'Unideal', range: [0, 25] },
    { label: 'Average', range: [26, 50] },
    { label: 'Good', range: [51, 75] },
    { label: 'Great', range: [76, 100] },
  ];

  const currentLabel = labels.find(label => rating >= label.range[0] && rating < label.range[1]);

  return (
    <div className="scaling-container">
      <h3 className="rating-title">{title}</h3>
      <div className="rating-scale-subcontainer">
        <div className="status-labels">
          {labels.map(label => (
            <div className="status-label-item" key={label.label}>
              <span className={`status-label ${currentLabel?.label === label.label ? 'highlight' : ''}`}>
                {label.label}
              </span>
              <div className="status-bar"></div> 
            </div>
          ))}
        </div>
        <div className="status-indicator" style={{ left: `calc(${rating}% )` }}></div>
        <div className="rating-description">{description}</div>
      </div>
    </div>
  );
};

const Status = ({ sellerRating, buyerRating }) => {
  const sellerDescription = `A total of 0 items were successfully sold, and 5 positive reviews were received. The positive review rate was 5%. In the past 2 years, there were 0 refunds, the refund rate was 0%, and there were 0 disputes. The dispute rate was 0%.`;
  const buyerDescription = `A total of 3 positive reviews were received, and the positive review rate was 20%. There were 0 disputes in the past 2 years, and the dispute rate was 0%.`;

  return (
    <div className="status-container">
      <RatingScale rating={sellerRating} title="Seller Rating" description={sellerDescription} />
      <RatingScale rating={buyerRating} title="Buyer Rating" description={buyerDescription} />
      <button className="status-button">Read about how status works</button>
    </div>
  );
};

export default Status;
