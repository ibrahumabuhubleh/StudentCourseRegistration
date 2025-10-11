import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Students from './pages/Students'
import Enrollments from './pages/Enrollments'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Teacher from './pages/Teacher'
import Student from './pages/Student'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'courses', element: <Courses /> },
      { path: 'students', element: <Students /> },
      { path: 'enrollments', element: <Enrollments /> },
      { path: 'teacher', element: <Teacher /> },
      { path: 'student', element: <Student /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
