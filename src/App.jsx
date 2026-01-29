
// import './App.css'
// import { Cheffkitchen } from './pages/Cheffkitchen'
// import { Explore } from './pages/Explore'
// import { Routes, Route } from 'react-router-dom'
// import { KitchenProvider } from './context/KitchenContext'
// import { DashProvider } from './context/DashContext'
// import { Layout } from './Dashboard/Layout'
// import { Category } from './Dashboard/Category'
// import { Product } from './Dashboard/Product'
// import { Orders } from './components/Orders'
// import { DashContext } from './context/DashContext'

// function App() {



//   return (
//     <>
//       <div className=' flex flex-row'>

//         <Routes>
//           <Route path='/' element={
//             <KitchenProvider>
//               <Explore />
//             </KitchenProvider>} />


//           <Route path='/chffkitchen' element={
//             <KitchenProvider>
//               <Cheffkitchen />
//             </KitchenProvider>} />

        

//           <Route path='/admin' element={<Layout/>}>
//               <Route index element={<Category/>}/>
//               <Route path='product' element={<Product/>}/>
//               <Route path='orders' element={<Orders/>}/>

//           </Route>

//         </Routes>


//       </div>

//     </>
//   )
// }

// export default App


import './App.css'
import { Cheffkitchen } from './pages/Cheffkitchen'
import { Explore } from './pages/Explore'
import { Routes, Route } from 'react-router-dom'
import { KitchenProvider } from './context/KitchenContext'
import { DashProvider } from './context/DashContext'
import { Layout } from './Dashboard/Layout'
import { Category } from './Dashboard/Category'
import { Product } from './Dashboard/Product'
import { Orders } from './Dashboard/Orders'


function App() {
  return (
    <div className='flex flex-row'>
      <Routes>

        <Route
          path='/'
          element={
                          <Explore />

          }
        />

        <Route
          path='/chffkitchen'
          element={
            <Cheffkitchen />
          }
        />

        <Route
          path='/admin'
          element={
         <Layout />
          }
        >
          <Route index element={<Category />} />
          <Route path='product' element={<Product />} />
          <Route path='orders' element={<Orders/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
