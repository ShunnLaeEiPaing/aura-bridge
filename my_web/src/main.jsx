import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './approch.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Icons (if you're using Bootstrap Icons)
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
