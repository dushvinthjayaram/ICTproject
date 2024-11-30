import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Blog from './Components/Blog'
import { Route, Routes } from 'react-router'
 // Correct import for React Router

// Import the missing components

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Blog'element={<Blog/>}/>
      </Routes>

    </>
  )
}

export default App
