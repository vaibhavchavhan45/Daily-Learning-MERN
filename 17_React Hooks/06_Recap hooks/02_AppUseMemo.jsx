import { useEffect, useMemo, useState } from "react";

function App() {
  const [bankData, setBankData] = useState({});
  const [cryptoDataWazirX, setCryptoDataWazirX] = useState({});
  const [cryptoDataBitcoin, setCryptoDataBitcoin] = useState({});

  useEffect(() => {
    setCryptoDataWazirX({returns : 100000})
  }, [])

   useEffect(() => {
    setCryptoDataBitcoin({returns : 200000})
  }, [])

  useEffect(() => {
    setTimeout(() => {
    setBankData({profit : 100000})
  }, 1000);
  }, [])

  // console.log("before");
  // const cryptoReturns = cryptoDataWazirX.returns + cryptoDataBitcoin.returns
  // console.log("after");
  //This return wala line runs everytime irrespective of the state changes or not, So we tell ki useMemo plz remember the output of this line and whenever the state(crypto ka) changes then useMemo will recalculate it and remember until the state again changes

  const cryptoReturns = useMemo(() => {
    console.log("Before logged in useMemo");
    return cryptoDataWazirX.returns + cryptoDataBitcoin.returns
  }, [cryptoDataWazirX, cryptoDataBitcoin])

  const incomeTax = (cryptoReturns + bankData.profit) * 0.3

  return (
    <div>
      <h1>My income tax for the current year is {incomeTax}</h1>
    </div>
  );
}

export default App;


