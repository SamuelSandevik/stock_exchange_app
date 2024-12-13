import SearchStock from "../exploreMainPage/exploreComponents/SearchStock";
import HeaderPage from "../HeaderPage/HeaderPage";
import StockSearch from "../StockSearch/StockSearch";
import CategoriesExplore from "./ExplorePageComponents/CategoriesExplore";
import CryptoExplore from "./ExplorePageComponents/CryptoExplore";
import MarketsExplore from "./ExplorePageComponents/MarketsExplore";
import "./ExploreScss/_explore.scss";


const ExplorePage = () => {
    return (
        <>
        <HeaderPage/>
        <SearchStock/>
        <CategoriesExplore/>
        <CryptoExplore/>
        <MarketsExplore/>
        </>
    );
}

export default ExplorePage;