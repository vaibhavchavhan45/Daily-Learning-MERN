import { useEffect, useState } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("re-render happens");

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({ returns: 100 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 200 });
    }, 5000);
  }, []);

  const incomeTax = (exchangeData.returns + bankData.income) * 0.3;
  return (
    <div>
      <h1>My income tax for the current year is {incomeTax}</h1>
    </div>
  );
}

export default App;

//Problem Statement : Calculate income tax (Slides : 12_hooks recap reconcilliation)
