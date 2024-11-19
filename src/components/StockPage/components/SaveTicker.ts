import axios from "axios"


const sendTicker = async (ticker :string) => {

    try {
        const response = await axios.post(
            "http://localhost:3000/saveTicker",
             {ticker},
             { withCredentials: true }
            )
            alert(`Stock saved! Your saved stocks: ${response.data.savedStocks.join(", ")}`);
    } catch (error) {
        console.log(error)
    }
}


export default sendTicker;