import { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const CoinContext = createContext();

export default function CoinContextProvider(props) {
  const [currency, setCurrency] = useState({
    name: "USD",
    symbol: "$"
  });
  const [coinData, setCoinData] = useState([]);

  const getData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ogkqCSVUaW3xUmDh4yuqD7jh"
      }
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const jsonData = await response.json();
      setCoinData(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, [currency]);

  const value = {
    coinData,
    setCurrency,
    currency
  };

  return (
    <CoinContext.Provider value={value}>
      {props.children}
    </CoinContext.Provider>
  );
}
