import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <Navbar />

      <main className="flex-1 container-page py-8 fade-in">
        <Outlet />
      </main>

      <footer className="border-t bg-white mt-10">
        <div className="container-page py-6 grid gap-4 md:grid-cols-3 text-sm">
          <div>
            <div className="font-semibold" style={{ fontFamily: '"Crimson Text", Georgia, serif' }}>
              Learnify
            </div>
            <p className="text-neutral-600 mt-1">
              Empowering education through technology. Learn, grow, and achieve with Learnify.
            </p>
          </div>
          <div>
            <div className="font-semibold">Explore</div>
            <ul className="mt-1 space-y-1 text-neutral-700">
              <li><a href="/teacher">Teacher Portal</a></li>
              <li><a href="/student">Student Portal</a></li>
              <li><a href="/courses">Courses</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-1 space-y-1 text-neutral-700">
              <li><a href="/signup">Join Learnify</a></li>
              <li><a href="mailto:info@learnify.academy">info@learnify.academy</a></li>
              <li><span className="text-neutral-500">© {new Date().getFullYear()} Learnify</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
