import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider><div className='max-w-screen-xl mx-auto'>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </div></AuthProvider>
  </StrictMode>,
)
