import React from 'react';
import './Status.scss'; 

const Status = ({ rating }) => {
  const labels = [
    { label: 'Bad', range: [0, 25] },
    { label: 'Okay', range: [26, 50] },
    { label: 'Good', range: [51, 75] },
    { label: 'Excellent', range: [76, 100] },
  ];

  const currentLabel = labels.find(label => rating >= label.range[0] && rating <= label.range[1]);

  return (
    <div className="status-container">
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
      <div className="status-indicator" style={{ left: `calc(${rating}% - 10px)` }}></div>
    </div>
  );
};

export default Status;
