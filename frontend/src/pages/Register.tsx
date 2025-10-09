import React, { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    course: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // frontend-only demo
    console.log('Form Submitted:', formData)
    alert('Registration successful! (Frontend only)')
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="card w-full max-w-xl fade-in">
        <h1 className="text-2xl font-bold mb-6">Student Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="input"
              placeholder="e.g. Alice Johnson"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
              placeholder="e.g. alice@example.com"
            />
          </div>

          {/* Password */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
          </div>

          {/* Course */}
          <div>
            <label className="label">Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">-- Choose a Course --</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="ai-ml">AI &amp; Machine Learning</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="ui-ux">UI/UX Design</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button type="submit" className="btn-primary">Register Now</button>
            <button type="button" className="btn-ghost" onClick={() => {
              setFormData({ fullName:'', email:'', password:'', confirmPassword:'', course:'' })
            }}>
              Reset
            </button>
          </div>
        </form>

        <p className="text-center text-slate-600 mt-6 text-sm">
          Already registered?{' '}
          <a href="#" className="text-blue-700 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
