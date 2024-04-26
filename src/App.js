import "./App.css";
import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Status from "./components/Status/Status";
//import StatusPage from './pages/StatusPage/StatusPage';
//import Footer from "./components/Footer/Footer"; // Uncomment if Footer is used

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );
}
export default App;
