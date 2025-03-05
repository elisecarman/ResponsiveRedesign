import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import AccessibleComponent from './pages/AccessibleComponent.tsx';
import Personas from './pages/Personas.tsx';
import NotFound from './pages/NotFound.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
      path: '/InteractionDesign-New/',
      element: <App/>,
      // errorElement: <NotFound/>,
      children: [
        {
          path: '/InteractionDesign-New/',
          element: <AccessibleComponent/>
        },
        {
          path: '/InteractionDesign-New/AccessibleComponent',
          element: <AccessibleComponent/>
        },
        {
          path:'/InteractionDesign-New/PersonasStoryboarding',
          element: <Personas/>
        }
      ]
  }
])

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
