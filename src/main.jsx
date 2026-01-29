import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { KitchenProvider } from './context/KitchenContext.jsx'
import { DashProvider } from './context/DashContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DashProvider>
      <KitchenProvider>
        <App />
      </KitchenProvider>
    </DashProvider>
  </BrowserRouter>,
)
