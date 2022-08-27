import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/web3';
import usePlatziPunks from "../../hooks/usePlatziPunks.js";

const Home = ({connect}) => {

  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  const [maxSupply, setMaxSupply] = useState(0);

  const platziPunks = usePlatziPunks();

  async function getMaxSuply()
  {
    const result= await platziPunks.methods.maxSupply().call();
    await setMaxSupply(result);
  }

  async function connect()
  {
    await activate(injected);
  }


  return (
    <>
      <p>Hello world </p>
      <button onClick={connect} >Connect</button>
      <p>{account}</p>
      <button onClick={getMaxSuply} >Suply</button>
      <p>{maxSupply}</p>
    </>
  );
};

export default Home;