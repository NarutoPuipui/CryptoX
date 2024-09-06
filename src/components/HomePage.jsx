import { Link } from "react-router-dom";
import { CoinContext } from "../context/context";
import Navbar from "./Header";
import Herosection from "./Herosection"; 
import { useContext, useEffect, useState } from "react";

export default function HomePage() {
  
  
  const data = useContext(CoinContext)
  
 


  return (
    <div className="container mx-auto p-4">
      
      <Herosection/>
      <section className="mb-8">
        <h2 className=" text-xl md:text-4xl p-10 text-center font-bold mb-4 text-white">Top Trending Cryptocurrencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-16">
        {data.coinData.map((coin) => (
            <Link to={`/${coin.id}`} key={coin.id} className="p-4 bg-black border border-red-500 rounded shadow-lg hover:animate-glow hover:border-4">
              <img src={coin.image} alt={coin.name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white text-center">{coin.name} ({coin.symbol.toUpperCase()})</h3>
              <p className="text-white text-center">Price: {data.currency.symbol} {coin.current_price.toLocaleString()}</p>
              <p className={`text-center ${coin.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </Link>
          ))}
        </div>
      </section>

     
    </div>
  );
}
