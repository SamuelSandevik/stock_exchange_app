

const SearchStock = () => {

    function searchStock(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        
    }


    return (
        <div className="search-container">
            <form action="" className="search-form">
                <input type="text" className="search-input"/>
                <button onClick={searchStock}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
}

export default SearchStock;