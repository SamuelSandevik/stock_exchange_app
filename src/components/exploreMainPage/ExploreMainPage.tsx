import DailyStockDiv from "./exploreComponents/DailyStockDiv";
import DailyTopStockDiv from "./exploreComponents/DailyTopStockDiv";
import SavedStockDiv from "./exploreComponents/SavedStockDiv";
import "./exploreScss/_explorePage.scss";


function ExploreMainPage() {
    

    return (

        <>
        <DailyStockDiv/>
        <div className="lowerExploreContainer"> 
            <DailyTopStockDiv />
            <SavedStockDiv/>
        </div>
        </>
    );

}

export default ExploreMainPage;