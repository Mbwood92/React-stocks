import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Stock(props) {
    // make a variable to store our api key
    const apiKey = "E6ZYPJwblOuEPUEPvhXSk4lffM3XGde3";
    // get the currency symbol from the url
    // these two lines get the params object from the url (address bar), 
    // and then we save into a variable called symbol for us to use later
    const params = useParams();
    // console.log(params);
    const symbol = params.symbol;
    // use the apiKey and symbol variables to make our url
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

    // state to hold the coin data
    const [stock, setStock] = useState(null);

    // function to fetch coin data
    const getStock = async () => {
        try {
            console.log(url)
            const response = await fetch(url);
            const data = await response.json();
            setStock(data);
        } catch (e) {
            console.error(e);
        }
    }

    // useEffect to run getCoin when component mounts
    useEffect(() => {
        getStock();
    }, []);


    // function for when data doesn't exist yet
    const loading = () => {
        return <div>Loading...</div>;
    };

    const loaded = () => {
        return stock.map((stock, index) => (
            <div key={index}>
                <h3>Name:{stock.name}</h3>
                <h3>Price:{stock.price}</h3>
                <h3>Change:{stock.change}%</h3>
            </div>
        ));
    };

    return (
        <div>
            {stock && stock.length ? loaded() : loading()}
        </div>
    );
}

export default Stock