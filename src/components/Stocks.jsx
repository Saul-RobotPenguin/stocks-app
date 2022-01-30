import { useState, useEffect } from "react";
// import { getStocksData } from "../api/indexApp";
import axios from "axios";
const Stocks = () => {
  const [appleStockName, setAppleStocksName] = useState([]);
  const [appleStockSymbol, setAppleStocksSymbol] = useState([]);
  const [appleStockBidPrice, setAppleStocksBidPrice] = useState([]);
  const [appleStockChange, setAppleStocksChange] = useState([]);
  // const [stockLatestTime, setStocksLatestTime] = useState([]);
  useEffect(() => {
    let Apple = {
      method: "GET",
      url: `https://cloud.iexapis.com/stable/stock/aapl/quote?token=${process.env.REACT_APP_STOCK_API_KEY}`,
    };

    axios
      .request(Apple)
      .then(function (response) {
        console.log(response.data);
        setAppleStocksName(response.data.companyName);
        setAppleStocksSymbol(response.data.symbol);
        setAppleStocksBidPrice(response.data.iexBidPrice);
        setAppleStocksChange(response.data.change);
        // setStocksLatestTime(response.data.latestTime);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  //Google
  const [googleStockName, setGoogleStocksName] = useState([]);
  const [googleStockSymbol, setGoogleStocksSymbol] = useState([]);
  const [googleStockBidPrice, setGoogleStocksBidPrice] = useState([]);
  const [googleStockChange, setGoogleStocksChange] = useState([]);
  // const [stockLatestTime, setStocksLatestTime] = useState([]);
  useEffect(() => {
    let Google = {
      method: "GET",
      url: `https://cloud.iexapis.com/stable/stock/goog/quote?token=${process.env.REACT_APP_STOCK_API_KEY}`,
    };

    axios
      .request(Google)
      .then(function (response) {
        console.log(response.data);
        setGoogleStocksName(response.data.companyName);
        setGoogleStocksSymbol(response.data.symbol);
        setGoogleStocksBidPrice(response.data.iexBidPrice);
        setGoogleStocksChange(response.data.change);
        // setStocksLatestTime(response.data.latestTime);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  //Facebook or Meta
  const [metaStockName, setMetaStocksName] = useState([]);
  const [metaStockSymbol, setMetaStocksSymbol] = useState([]);
  const [metaStockBidPrice, setMetaStocksBidPrice] = useState([]);
  const [metaStockChange, setMetaStocksChange] = useState([]);
  // const [stockLatestTime, setStocksLatestTime] = useState([]);
  useEffect(() => {
    let Meta = {
      method: "GET",
      url: `https://cloud.iexapis.com/stable/stock/fb/quote?token=${process.env.REACT_APP_STOCK_API_KEY}`,
    };

    axios
      .request(Meta)
      .then(function (response) {
        console.log(response.data);
        setMetaStocksName(response.data.companyName);
        setMetaStocksSymbol(response.data.symbol);
        setMetaStocksBidPrice(response.data.iexBidPrice);
        setMetaStocksChange(response.data.change);
        // setStocksLatestTime(response.data.latestTime);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <>
      {/* {stockData.map((data) => {
        return <h1 key={data.companyName}>{data.companyName}</h1>;
      })} */}

      <div className="container bg-dark text-white border border-white rounded-sm">
        <div className="d-flex align-items-center">
          <p className="  h1 order-1 col-8 col-sm-8 col-md-8 col-lg-10">
            {appleStockSymbol}
          </p>
          <p className="  h5   order-2 col-8 col-sm-8 col-md-8 col-lg-10">
            {appleStockBidPrice}Not open
          </p>

          {/* <p className="col-4 col-sm-2 col-md-2 col-lg-2">{stockLatestTime}</p> */}
        </div>

        <div className="d-flex align-items-center">
          <p className=" text-muted h3 order-1 col-8 col-sm-8 col-md-8 col-lg-10">
            {appleStockName}
          </p>
          <p className=" h5  order-2 col-8 col-sm-8 col-md-8 col-lg-10">
            {appleStockChange}
          </p>

          {/* <p className="col-4 col-sm-2 col-md-2 col-lg-2">{stockLatestTime}</p> */}
        </div>
      </div>
      {/* Google */}
      <div className="container bg-dark text-white border border-white rounded-sm">
        <div className="d-flex align-items-center">
          <p className="  h1 order-1 col-8 col-sm-8 col-md-8 col-lg-10">
            {googleStockSymbol}
          </p>
          <p className="  h5   order-2 col-8 col-sm-8 col-md-8 col-lg-10">
            {googleStockBidPrice}Not open
          </p>

          {/* <p className="col-4 col-sm-2 col-md-2 col-lg-2">{stockLatestTime}</p> */}
        </div>

        <div className="d-flex align-items-center">
          <p className=" text-muted h3 order-1 col-8 col-sm-8 col-md-8 col-lg-10">
            {googleStockName}
          </p>
          <p className=" h5  order-2 col-8 col-sm-8 col-md-8 col-lg-10">
            {googleStockChange}
          </p>

          {/* <p className="col-4 col-sm-2 col-md-2 col-lg-2">{stockLatestTime}</p> */}
        </div>
      </div>
      {/* Facebook or Meta*/}
      <div className="container bg-dark text-white border border-white rounded-sm">
        <div className="d-flex align-items-center">
          <p className="  h1 order-1 col-8 col-sm-8 col-md-8 col-lg-10">
            {metaStockSymbol}
          </p>
          <p className="  h5   order-2 col-8 col-sm-8 col-md-8 col-lg-10">
            {metaStockBidPrice}Not open
          </p>

          {/* <p className="col-4 col-sm-2 col-md-2 col-lg-2">{stockLatestTime}</p> */}
        </div>

        <div className="d-flex align-items-center">
          <p className=" text-muted h3 order-1 col-8 col-sm-8 col-md-8 col-lg-10">
            {metaStockName}
          </p>
          <p className=" h5  order-2 col-8 col-sm-8 col-md-8 col-lg-10">
            {metaStockChange}
          </p>

          {/* <p className="col-4 col-sm-2 col-md-2 col-lg-2">{stockLatestTime}</p> */}
        </div>
      </div>
      <div class="container">
        <input
          className="form-control w-100  border border-white rounded-sm bg-light"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
      </div>
    </>
  );
};

export default Stocks;
