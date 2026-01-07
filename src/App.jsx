
import './App.css'
import { Cheffkitchen } from './pages/Cheffkitchen'
import { Explore } from './pages/Explore'
import { Routes, Route } from 'react-router-dom'
import { KitchenProvider } from './context/KitchenContext'
import { DashProvider } from './context/DashContext'
import { Layout } from './Dashboard/Layout'

function App() {
  return (
    <>
      <div className=' flex flex-row'>

        <Routes>
          <Route path='/' element={
            <KitchenProvider>
              <Explore />
            </KitchenProvider>} />


          <Route path='/chffkitchen' element={
            <KitchenProvider>
              <Cheffkitchen />
            </KitchenProvider>} />


          <Route path='/layout' element={
            <DashProvider>
              <Layout />
            </DashProvider>} />
        </Routes>


      </div>

    </>
  )
}

export default App
