import React,{ useState } from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider, useLocation} from "react-router-dom";
import Layout from './components/Layout.jsx'
import Dashboard from './components/Dashboard.jsx'
import './App.css'
import {Toaster} from 'sonner'
import Mentor from './components/Mentor.jsx';
import MentorSignup from './components/MentorSignup.jsx';
import MentorsFirstPage from './components/mentors/MentorsFirstPage.jsx';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Dashboard/>} />
      <Route path='mentor' element={<Mentor/>} />
      <Route path='mentor/signup' element={<MentorSignup/>} />
      <Route path='mentor/dashboard' element={<MentorsFirstPage/>}/>
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
