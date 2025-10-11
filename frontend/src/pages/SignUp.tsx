import React, { useState } from 'react'

export default function SignUp() {
  const [role, setRole] = useState<'student' | 'teacher'>('student')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.password) {
      alert('Please complete all required fields.')
      return
    }
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    console.log('Sign Up (frontend only):', { role, ...form })
    alert(`Welcome to LearnMate Academy, ${form.fullName}! (Frontend only)`)
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-xl">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-neutral-600 mt-1">
          Join LearnMate Academy as a {role === 'student' ? 'student' : 'teacher'}.
        </p>

        <div className="mt-4 flex gap-2">
          <button
            className={'btn-ghost ' + (role === 'student' ? 'ring-1 ring-neutral-200' : '')}
            onClick={() => setRole('student')}
          >
            I’m a Student
          </button>
          <button
            className={'btn-ghost ' + (role === 'teacher' ? 'ring-1 ring-neutral-200' : '')}
            onClick={() => setRole('teacher')}
          >
            I’m a Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="label">Full Name</label>
            <input
              className="input"
              name="fullName"
              placeholder="e.g. Alex Carter"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="e.g. alex@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="label">Confirm Password</label>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="btn-primary w-full">Create Account</button>
        </form>

        <p className="text-center text-neutral-600 mt-6 text-sm">
          By continuing you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
