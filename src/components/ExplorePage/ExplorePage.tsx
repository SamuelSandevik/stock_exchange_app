import CategoriesExplore from "./ExplorePageComponents/CategoriesExplore";
import MarketsExplore from "./ExplorePageComponents/MarketsExplore";
import "./ExploreScss/_explore.scss";


const ExplorePage = () => {
    return (
        <>
        <div className="explore-header">Explore Page</div>
        <CategoriesExplore/>
        <MarketsExplore/>
        </>
    );
}

export default ExplorePage;