import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Count from './Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/*Le mode strict permet d'afficher les erreurs en cas de problème*/}
    <App />
    <Count />
  </StrictMode>,
)
