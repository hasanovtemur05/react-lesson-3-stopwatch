import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StopInterval from './components/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopInterval/>
  </StrictMode>,
)
