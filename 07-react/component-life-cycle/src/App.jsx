import { useEffect, useState } from 'react'
import './App.css'
import { LifeCycleComponent1 } from './components/LifeCycleComponent1'
import { LifeCycleComponent2 } from './components/LifeCycleComponent2'


// console.log("Hello")

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1);
  }, [])

  // console.log("APP")
  return (
    <>
    <h1>Component Life Cycle</h1>
    {/* <LifeCycleComponent1/> */}
    <LifeCycleComponent2/>
    </>
  )
}

export default App
