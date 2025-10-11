import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 container-page py-8 fade-in">
        <Outlet />
      </main>

      <footer className="border-t bg-white mt-10">
        <div className="container-page py-4 text-xs text-slate-500 text-center">
          React + Vite + Tailwind · Student Management System (Frontend Only)
        </div>
      </footer>
    </div>
  )
}
