import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./componencts/Header.jsx";
import Main from "./componencts/Main.jsx"

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
  </>
)
