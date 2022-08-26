import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/web3';

const Home = ({connect}) => {

  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  async function connect()
  {
    await activate(injected);
  }


  return (
    <>
      <p>Hello world </p>
      <button onClick={connect} >Connect</button>
      <p>{account}</p>
    </>
  );
};

export default Home;