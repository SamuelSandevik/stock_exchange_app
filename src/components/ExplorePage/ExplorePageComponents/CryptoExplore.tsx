import React, { useMemo } from "react";
import xrpIcon from "../../../assets/ripple-svgrepo-com.svg";
import solanaIcon from "../../../assets/solana-svgrepo-com.svg";

const generateRandomNumber = () => {
  return parseFloat((Math.random() * (8 - -7) + -7).toFixed(1));
};

const CryptoExplore = () => {
  const btcNumber = useMemo(() => generateRandomNumber(), []);
  const solNumber = useMemo(() => generateRandomNumber(), []);
  const ethNumber = useMemo(() => generateRandomNumber(), []);
  const ltcNumber = useMemo(() => generateRandomNumber(), []);
  const xrpNumber = useMemo(() => generateRandomNumber(), []);

  return (
    <>
      <h2 className="white-header">Crypto Currencies</h2>
      <div className="crypto-container">
        <div className="crypto-1 crypto">
          <div className="crypto-content-1">
            <i className="fa-brands fa-bitcoin"></i>
            <div className="crypto-ticker-1">
              <p className="crypto-header">BTC</p>
              <p
                className={
                  btcNumber > 0
                    ? "positive"
                    : btcNumber < 0
                    ? "negative"
                    : "neutral"
                }
              >
                {btcNumber > 0 ? `+${btcNumber}` : btcNumber}%
              </p>
            </div>
          </div>
          <p>Bitcoin</p>
          <p>$101,823.04</p>
        </div>
        <div className="crypto-2 crypto">
          <img className="svg" src={solanaIcon} alt="" />
          <div className="crypto-content-2">
            <p className="crypto-header">SOL</p>
            <p
              className={
                solNumber > 0
                  ? "positive"
                  : solNumber < 0
                  ? "negative"
                  : "neutral"
              }
            >
              {solNumber > 0 ? `+${solNumber}` : solNumber}%
            </p>
          </div>
        </div>
        <div className="crypto-3 crypto">
          <i className="fa-brands fa-ethereum"></i>
          <p className="crypto-header">ETH</p>
          <p
            className={
              ethNumber > 0
                ? "positive"
                : ethNumber < 0
                ? "negative"
                : "neutral"
            }
          >
            {ethNumber > 0 ? `+${ethNumber}` : ethNumber}%
          </p>
          <p>$3,784.76</p>
        </div>
        <div className="crypto-4 crypto">
          <i className="fa-solid fa-litecoin-sign"></i>
          <div className="crypto-content-4">
            <p className="crypto-header">LTC</p>
            <p
              className={
                  ltcNumber > 0
                  ? "positive"
                  : ltcNumber < 0
                  ? "negative"
                  : "neutral"
              }
            >
              {ltcNumber > 0 ? `+${ltcNumber}` : ltcNumber}%
            </p>
          </div>
        </div>
        <div className="crypto-5 crypto">
          <img className="svg" src={xrpIcon} alt="" />
          <div className="crypto-content-5">
            <p className="crypto-header">XRP</p>
            <p
              className={
                xrpNumber > 0
                  ? "positive"
                  : xrpNumber < 0
                  ? "negative"
                  : "neutral"
              }
            >{xrpNumber > 0 ? `+${xrpNumber}` : xrpNumber}%</p>
          </div>
          <div className="crypto-content-5">
            <p>Market Cap</p>
            <p>$135.25B</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoExplore;
