import Footer from "./components/FooterPage/FooterPage";
import StocksDisplay from "./components/DisplayStocks/DisplayStock";
import ExploreMainPage from "./components/exploreMainPage/ExploreMainPage";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import SignUpForm from "./components/SignUpPage/SignUpForm";
import "./style.scss";
import { generateMockAggregatesData, generateMockDailyOpenCloseData } from "./components/MockDataForAPI/Mockdata";
import { useEffect, useState } from "react";
import { Aggregates, DailyOpenClose } from "./components/MockDataForAPI/MockdataInterface";





function App() {




  return (
    <>

      <Footer />
    </>
  );
}

export default App;
