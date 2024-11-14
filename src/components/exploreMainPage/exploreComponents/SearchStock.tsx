import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchStock = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    function searchStock(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();

        navigate("/stockPage", { state: { searchTerm } });
    }


    return (
        <div className="search-container">
            <form action="" className="search-form">
                <input type="text" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={searchStock}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
}

export default SearchStock;