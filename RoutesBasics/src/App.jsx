import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count}/>
      <Buttons setCount={setCount} count={count}/>
    </div>
  );
}

function Count({count}){
  return <div>
    {count}
  </div>
}

function Buttons({setCount, count}){
  return <div>
    <button onClick={() => {setCount(count+1)}}>Increase</button>
    <button onClick={() => {setCount(count-1)}}>Decrease</button>
  </div>
}

export default App;