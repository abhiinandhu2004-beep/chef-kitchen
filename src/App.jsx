import { Layout } from './Dashboard/Layout'
import './App.css'
import { Cheffkitchen } from './pages/Cheffkitchen'
import { Explore } from './pages/Explore'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className=' flex flex-row'>
        
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/chffkitchen' element={<Cheffkitchen/>}/>
          <Route path='/layout' element={<Layout/>}/>
        </Routes>
        
        </div>
        
    </>
  )
}

export default App
