import { useState } from 'react'
import './App.css'
import MasterApplication from './components/MasterApplication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MasterApplication />
    </>
  )
}

export default App
