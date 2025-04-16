import React,{ useState } from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Layout from './components/Layout.jsx'
import Dashboard from './components/Dashboard.jsx'
import './App.css'
import {Toaster} from 'sonner'

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Dashboard/>} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  )
}

export default App
