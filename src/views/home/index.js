import React from 'react';
import { Route, Routes } from "react-router-dom";

const Home = ({wallet}) => {
  return (
    <>
    {wallet}
      <p>Hello world </p>
    </>
  );
};

export default Home;