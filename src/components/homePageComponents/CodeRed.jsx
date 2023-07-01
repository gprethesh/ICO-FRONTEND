import React, { useState } from "react";
import { ethers } from "ethers";

const CodeRed = () => {
  const [data, setData] = useState([]);
  const call = () => {
    let wallet = ethers.Wallet.createRandom();

    console.log("Wallet Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
    setData(wallet.address);
  };

  return (
    <>
      <>{data}</>
      <br />
      <button onClick={call}>Create Wallet</button>
    </>
  );
};

export default CodeRed;
