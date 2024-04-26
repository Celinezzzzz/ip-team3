import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ListedItemsPage from "./pages/ListedItemsPage/ListedItemsPage";
import SoldItemsPage from "./pages/SoldItemsPage/SoldItemsPage";
import StatusPage from "./pages/StatusPage/StatusPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user-profile/status" element={<StatusPage />}></Route>
        <Route
          path="/user-profile/listeditems"
          element={<ListedItemsPage />}
        ></Route>
        <Route
          path="/user-profile/solditems"
          element={<SoldItemsPage />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;