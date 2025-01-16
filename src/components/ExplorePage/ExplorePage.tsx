import SearchStock from "../exploreMainPage/exploreComponents/SearchStock";
import CategoriesExplore from "./ExplorePageComponents/CategoriesExplore";
import CryptoExplore from "./ExplorePageComponents/CryptoExplore";
import MarketsExplore from "./ExplorePageComponents/MarketsExplore";
import "./ExploreScss/_explore.scss";


const ExplorePage = () => {
    return (
        <>
        <div className="explore-super-container">
        <div className="explore-container">
        <div className="explore-header">
            Explore
        </div>
        <SearchStock/>
        <CategoriesExplore/>
        <CryptoExplore/>
        <MarketsExplore/>
        </div>
        </div>
        </>
    );
}

export default ExplorePage;