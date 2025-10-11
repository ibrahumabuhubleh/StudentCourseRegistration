import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Dashboard' },
  { to: '/courses', label: 'Courses' },
  { to: '/students', label: 'Students' },
  { to: '/enrollments', label: 'Enrollments' },
  { to: '/register', label: 'Register' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="bg-white/90 backdrop-blur border-b sticky top-0 z-20">
      <div className="container-page h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-blue-600"></div>
          <span className="font-semibold">Student Management</span>
        </div>

        <nav className="flex gap-1">
          {tabs.map(t => {
            const active = pathname === t.to
            return (
              <Link
                key={t.to}
                to={t.to}
                className={
                  'px-3 py-2 rounded-lg text-sm transition-colors ' +
                  (active
                    ? 'bg-slate-200 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100')
                }
              >
                {t.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
