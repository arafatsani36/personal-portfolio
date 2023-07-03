import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import About from './component/About/About';
import Banner from './component/Banner/Banner';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>, 
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <div className='primary-background-color'>
      <div className='mx-auto max-w-screen-xl'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
