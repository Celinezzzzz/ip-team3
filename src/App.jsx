import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import StatusPage from "./pages/StatusPage/StatusPage";
//import Footer from "./components/Footer/Footer"; // Uncomment if Footer is used

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user-profile"></Route>
        <Route path="/user-profile/status" element={<StatusPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
