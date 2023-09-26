import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Donation from './components/donation/Donation.jsx';
import Statistics from './components/statistics/Statistics.jsx';
import ShowDetails from './components/dynamicDetails/ShowDetails.jsx';
import Error from './components/handleError/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('/donation.json')

      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: ()=>fetch('/donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        
      },
      {
        path: '/donations/:id',
        element:<ShowDetails></ShowDetails>,
        loader:()=>fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
