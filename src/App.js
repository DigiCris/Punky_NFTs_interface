import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Web3 from "web3/dist/web3.min";
import { useEffect } from 'react';

function App() {

return (
  <Routes>
  <Route path="/" exact element={<Home />} />
  </Routes>
);
}

export default App;