import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Students from './pages/Students'
import Enrollments from './pages/Enrollments'
import Teacher from './pages/Teacher'
import Student from './pages/Student'
import Register from './pages/Register'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },           // new landing page
      { path: 'courses', element: <Courses /> },
      { path: 'students', element: <Students /> },
      { path: 'enrollments', element: <Enrollments /> },
      { path: 'teacher', element: <Teacher /> },
      { path: 'student', element: <Student /> },
      { path: 'register', element: <Register /> },  // keep if you still want it
      { path: 'signup', element: <SignUp /> },      // new route
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
