import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );

export default App;