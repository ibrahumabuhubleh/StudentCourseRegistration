import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/students', label: 'Students' },
  { to: '/enrollments', label: 'Enrollments' },
  { to: '/teacher', label: 'Teacher' },
  { to: '/student', label: 'Student' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="bg-white/90 backdrop-blur border-b sticky top-0 z-20">
      <div className="container-page h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Crimson Academy"
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-neutral-100"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold" style={{ fontFamily: '"Crimson Text", Georgia, serif' }}>
              Crimson Academy
            </span>
            <span className="text-xs text-neutral-600 -mt-0.5">Student Management</span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {tabs.map(t => {
            const active = pathname === t.to
            return (
              <Link
                key={t.to}
                to={t.to}
                className={
                  'px-3 py-2 rounded-xl text-sm transition-colors ' +
                  (active
                    ? 'bg-neutral-100 text-neutral-900 font-semibold'
                    : 'text-neutral-900 hover:bg-neutral-100')
                }
              >
                {t.label}
              </Link>
            )
          })}

          <div className="ml-2 flex items-center gap-2">
            <Link to="/register" className="btn-ghost">Sign up</Link>
            <button className="btn-primary">Sign in</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
