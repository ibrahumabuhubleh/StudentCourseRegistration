import { jsx as _jsx } from "react/jsx-runtime";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Students from './pages/Students';
import Enrollments from './pages/Enrollments';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            { index: true, element: _jsx(Dashboard, {}) },
            { path: 'courses', element: _jsx(Courses, {}) },
            { path: 'students', element: _jsx(Students, {}) },
            { path: 'enrollments', element: _jsx(Enrollments, {}) },
            { path: 'teacher', element: _jsx(Teacher, {}) },
            { path: 'student', element: _jsx(Student, {}) },
            { path: 'register', element: _jsx(Register, {}) },
            { path: '*', element: _jsx(NotFound, {}) },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
