import React from "react";
import xrpIcon from '../../../assets/ripple-svgrepo-com.svg';
import solanaIcon from '../../../assets/solana-svgrepo-com.svg';

const CryptoExplore = () => {
  return (
    <>
      <h2 className="white-header">Crypto Currencies</h2>
      <div className="crypto-container">
        <div className="crypto-1 crypto">
          <div className="crypto-content-1">
            <i className="fa-brands fa-bitcoin"></i>
            <p>BTC</p>
          </div>
          <p>Bitcoin</p>
          <p>$324.54</p>
          <p>+6.9%</p>
        </div>
        <div className="crypto-2 crypto">
        <img className="svg" src={solanaIcon} alt="" />
          <div className="crypto-content-2">
            <p>SOL</p>
            <p>+6.9%</p>
          </div>
        </div>
        <div className="crypto-3 crypto">
        <i className="fa-brands fa-ethereum"></i>
          <p>ETH</p>
          <p>+6.9%</p>
        </div>
        <div className="crypto-4 crypto">
        <i className="fa-solid fa-litecoin-sign"></i>
          <div className="crypto-content-4">
            <p>LTC</p>
            <p>+6.9%</p>
          </div>
        </div>
        <div className="crypto-5 crypto">
          <img className="svg" src={xrpIcon} alt="" />
          <p>XRP</p>
          <p>+6.9%</p>
        </div>
      </div>
    </>
  );
};

export default CryptoExplore;
