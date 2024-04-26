import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import ListedItemsPage from './pages/ListedItemsPage/ListedItemsPage';
import SoldItemsPage from './pages/SoldItemsPage/SoldItemsPage';
import StatusPage from './pages/StatusPage/StatusPage';
import Footer from './components/Footer/Footer';
import { AboutPage } from './pages/AboutPage/AboutPage';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user-profile/status-scale" element={<StatusPage />} />
        <Route path="/" element={<ListedItemsPage />} />
        <Route path="/user-profile/solditems" element={<SoldItemsPage />} />
        <Route path="/user-profile/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
