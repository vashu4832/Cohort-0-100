import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount}/>
      
    </div>
  );
}

function Count({count, setCount}){
  return <div>
    <CountRenderer count={count} />
    <br/>
    <Buttons setCount={setCount} count={count}/>
  </div>
}

function CountRenderer({count}){
  return <div>
    <h3>{count}</h3>
  </div>
}

function Buttons({setCount, count}){
  return <div>
    <button onClick={() => {setCount(count+1)}}>Increase</button>
    <button onClick={() => {setCount(count-1)}}>Decrease</button>
  </div>
}

export default App;