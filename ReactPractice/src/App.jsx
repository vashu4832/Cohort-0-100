import { useState } from "react"


function App() {
  const [title, setTitle] = useState("My name is Ashutosh")

  function handleClick(){
    setTitle("My name is "+Math.random())
  }

  return (
    <>
      <HeaderDown/>
     <Header title="My name is Raman"/>
     <Header title="My name is Raman"/>
    </>
  )
}

function HeaderDown(){
  const [title, setTitle] = useState("My name is Ashutosh")

  function handleClick(){
    setTitle("My name is "+Math.random())
  }

  return(
    <>
      <button onClick={handleClick}>Click me to change the title</button>
      <Header title={title}/>
    </>
  )
}

function Header({title}){
  return(
    <h1>{title}</h1>
  )
}

export default App
