import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="fade-in flex flex-col items-center justify-center py-24 text-center">
      <div className="text-6xl font-bold text-slate-800">404</div>
      <p className="mt-2 text-slate-500">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn-primary mt-6">Go back home</Link>
    </div>
  )
}
