import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import AppLayout from './AppLayout'
import Home from './pages/Home/Home'
import Docs from './pages/Docs/Docs'
import Forum from './pages/Forum/Forum'
//import Profile from './pages/Profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'docs', element: <Docs /> },
      { path: 'forum', element: <Forum /> },
//      { path: 'profile', element: <Profile /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
