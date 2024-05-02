import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "allen",
    age :21
  }

  return (
    <>
      <h1 className='bg-red-600 text-white rounded-lg p-4  mb-5'>Tailwind test</h1>
   
      <Cards username="sk"   btntext="click me"/>
      <Cards  username="allen" />
       </>
  )
}

export default App
