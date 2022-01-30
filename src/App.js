// import { useState, useEffect } from "react";
import "./App.css";
import Stocks from "./components/Stocks";
import Header from "./components/Header";
// import { getStocksData } from "./api/indexApp";

function App() {
  // const [stockData, setStocksData] = useState([]);
  // useEffect(() => {
  //   getStocksData().then((data) => setStocksData(data));
  // });
  return (
    <div className="App">
      <Header />
      <Stocks />
    </div>
  );
}

export default App;
