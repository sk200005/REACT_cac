import { StrictMode } from 'react'   //Core foundational library
import { createRoot } from 'react-dom/client'  //ReactDOM is implementation of react on web 
                                               // same as ReactNative for Mobile app 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(   //it the same root that is present in index.html
  <StrictMode>
    <App />
  </StrictMode>,
)
