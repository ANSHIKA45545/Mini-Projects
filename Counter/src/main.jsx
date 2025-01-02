import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lock from './App1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Lock />
  </StrictMode>
)
