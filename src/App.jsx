import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Status from "./components/Status/Status";
// import Header from './components/Header/Header'; // Uncomment if Header is used
//import StatusPage from './pages/StatusPage/StatusPage';
// import Footer from "./components/Footer/Footer"; // Uncomment if Footer is used

function App() {
  return (
    <>
      <Status rating={75} />
    </>
  );
}

export default App;
