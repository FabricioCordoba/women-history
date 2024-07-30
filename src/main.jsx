import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WomenProvider } from  "c:/Users/fabri/OneDrive/Escritorio/women-history/src/context/womenContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WomenProvider>
      <App />

    </WomenProvider>
  </React.StrictMode>,
)
