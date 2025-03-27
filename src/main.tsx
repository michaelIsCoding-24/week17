import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import HelpPage from './HelpPage.tsx'
import About from './About.tsx'
import "/src/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    // This doesn't change
    element: <Layout/>,
    children: [  
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/help",
      element: <HelpPage/>
    }
  ]
  }
  

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
