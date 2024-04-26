import React, { useEffect } from 'react';

import './About.scss';
import { Navbar } from '../../components/Navbar/Navbar';
export const AboutPage = () => {
  const PageTitle = () => {
    useEffect(() => {
      document.title = 'About Page';
    }, []);
  };
  PageTitle();

  return (
    <>
      <Navbar />
      <div>This is About Page, needs to create</div>
    </>
  );
};
