import { useState, memo, useEffect, useMemo } from "react";

function App() {

  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});


  useEffect(() => {
    // Some operations to get the data
    setExchange1Data({
      returns: 100
    })
  }, [])

  useEffect(() => {
    // Some operations to get the data
    setExchange2Data({
      returns: 100
    })
  }, [])

  useEffect(() => {
    // Some operations to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 5000)
  }, [])

  const cryptoReturns = useMemo(() => {
    console.log("Hi there before");
    return exchange1Data.returns+exchange2Data.returns;
  }, [exchange1Data, exchange2Data])

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <>
      <p>Hi there your tax returns are {incomeTax}</p>
    </>
  );
}

export default App;
