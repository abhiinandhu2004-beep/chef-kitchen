import './App.css'
import { Cheffkitchen } from './components/Cheffkitchen'
import { Explore } from './components/Explore'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <div className=' flex flex-row'>
        
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/chffkitchen' element={<Cheffkitchen/>}/>
        </Routes>
        
        </div>
        
   
    </>
  )
}

export default App
