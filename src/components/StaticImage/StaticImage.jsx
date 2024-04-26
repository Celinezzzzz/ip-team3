import React from 'react';
import './StaticImage.scss';

const StaticImage = ({ image }) => {
  return <img className="static-image" src={image} alt="Description" />;
};

export default StaticImage;
