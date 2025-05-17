import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Layout from './components/Layout.jsx'
import Dashboard from './components/Dashboard.jsx'
import './App.css'
import {Toaster} from 'sonner'
import Mentor from './components/mentors/Mentor.jsx';
import MentorSignup from './components/mentors/MentorSignup.jsx';
import MFirstPage from './components/mentors/MFirstPage.jsx';
import MHome from './components/mentors/MHome.jsx';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Dashboard/>} />
      <Route path='mentor' element={<Mentor/>} />
      <Route path='mentor/signup' element={<MentorSignup/>} />
      <Route path='mentor/dashboard' element={<MFirstPage/>}/>
      <Route path='mentor/home' element={<MHome/>}/>
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
