import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { CoinContext } from '../context/context';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinData = () => {
  const currency = useContext(CoinContext)
  const { coinid } = useParams();
  const [coin, setCoin] = useState(null);
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ogkqCSVUaW3xUmDh4yuqD7jh' }
    };

    try {
      // Fetch coin details
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options);
      const data = await response.json();
      setCoin(data);

      // Fetch historical price data (for the chart)
      const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.currency.name}&days=7`, options);
      const chartData = await chartResponse.json();
      setChartData(chartData);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coinid,currency.currency]);

  // If coin data is not yet available, show a loading spinner
  if (!coin || !chartData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
      </div>
    );
  }

  // Prepare data for the chart
  const priceData = chartData.prices.map((price) => price[1]);
  const timestamps = chartData.prices.map((price) => {
    const date = new Date(price[0]);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: `${coin.name} Price ${currency.currency.name}`,
        data: priceData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      }
    ],
  };

  return (
    <div className="p-6 bg-transparent text-white rounded-lg shadow-md max-w-4xl mx-auto mt-10 border border-gray-700">
      {/* Coin Image */}
      <div className="flex justify-center mb-6">
        <img src={coin.image?.large} alt={coin.name} className="w-32 h-32 object-contain" />
      </div>

      {/* Coin Name and Symbol */}
      <h1 className="text-4xl font-bold text-center mb-4">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h1>

      {/* Coin Description */}
      <p className="text-gray-300 mb-6 p-5 text-justify leading-relaxed">
        {coin.description?.en || "No description available."}
      </p>

      {/* Chart */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Price Trend (Last 7 Days)</h2>
        <Line data={data} />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Categories</h2>
        <ul className="list-disc pl-6">
          {coin.categories?.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      {/* Hashing Algorithm */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Hashing Algorithm</h2>
        <p>{coin.hashing_algorithm || "N/A"}</p>
      </div>

      {/* Block Time */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Block Time</h2>
        <p>{coin.block_time_in_minutes ? `${coin.block_time_in_minutes} minutes` : "N/A"}</p>
      </div>
    </div>
  );
};

export default CoinData;
