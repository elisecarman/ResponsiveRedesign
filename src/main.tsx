import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import AccessibleComponent from './pages/AccessibleComponent.tsx';
import Personas from './pages/Personas.tsx';
import ResponsiveRedesign from './pages/ResponsiveRedesign.tsx';

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
        },
        {
          path:'/InteractionDesign-New/ResponsiveRedesign',
          element: <ResponsiveRedesign/>
        }
      ]
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
