import axios from "axios"


const sendTicker = async (ticker :string) => {

    try {
        const response = await axios.post(
            "https://silly-stocks-server.onrender.com/saveTicker",
             {ticker},
             { withCredentials: true }
            )
            alert(`Stock saved! Your saved stocks: ${response.data.savedStocks.join(", ")}`);
    } catch (error) {
        console.log(error)
    }
}


export default sendTicker;