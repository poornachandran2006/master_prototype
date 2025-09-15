import { useState } from 'react'
import './App.css'
import SlaveApplication from './components/SlaveApplication'
// import MasterApplication from './components/MasterApplication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MasterApplication /> */}
      <SlaveApplication />
    </>
  )
}

export default App
