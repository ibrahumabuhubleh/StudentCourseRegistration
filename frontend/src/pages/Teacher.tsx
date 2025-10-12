import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import type { Course, Student, Enrollment } from '../types'

export default function Teacher() {
  const [courses, setCourses] = useState<Course[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [form, setForm] = useState({ code: '', title: '', credits: 3, description: '' })
  const [saving, setSaving] = useState(false)

  async function load() {
    const [cs, ss, es] = await Promise.all([
      api.getCourses(),
      api.getStudents(),
      api.getEnrollments(),
    ])
    setCourses(cs); setStudents(ss); setEnrollments(es)
  }
  useEffect(() => { load() }, [])

  async function addCourse(e: React.FormEvent) {
    e.preventDefault()
    if (!form.code || !form.title) return
    setSaving(true)
    await api.createCourse({ ...form })
    setForm({ code: '', title: '', credits: 3, description: '' })
    setSaving(false)
    load()
  }

  return (
    <div className="fade-in space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-card border">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Teacher Portal</h1>
            <p className="text-neutral-600 mt-1">
              Create courses, manage students, and review enrollments.
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/courses" className="btn-ghost">Manage Courses</Link>
            <Link to="/students" className="btn-ghost">Manage Students</Link>
            <Link to="/enrollments" className="btn-primary">Manage Enrollments</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <div className="text-sm text-neutral-600 mb-1">Total Courses</div>
          <div className="text-4xl font-bold">{courses.length}</div>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-600 mb-1">Total Students</div>
          <div className="text-4xl font-bold">{students.length}</div>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-600 mb-1">Enrollments</div>
          <div className="text-4xl font-bold">{enrollments.length}</div>
        </div>
      </div>

      {/* Quick Create + Recent */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Quick Create Course</h2>
          <form onSubmit={addCourse} className="space-y-3">
            <div>
              <label className="label">Course Code</label>
              <input
                className="input"
                placeholder="e.g. CS101"
                value={form.code}
                onChange={e => setForm(f => ({ ...f, code: e.target.value }))}
              />
            </div>
            <div>
              <label className="label">Title</label>
              <input
                className="input"
                placeholder="e.g. Intro to Programming"
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <label className="label">Credits</label>
                <input
                  type="number"
                  min={0}
                  className="input"
                  value={form.credits}
                  onChange={e => setForm(f => ({ ...f, credits: Number(e.target.value) }))}
                />
              </div>
              <div className="col-span-2">
                <label className="label">Short Description</label>
                <input
                  className="input"
                  placeholder="Optional"
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
            </div>
            <button className="btn-primary" disabled={saving}>
              {saving ? 'Creating…' : 'Create Course'}
            </button>
          </form>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>
          {enrollments.length === 0 ? (
            <p className="text-neutral-600 text-sm">No enrollments yet.</p>
          ) : (
            <ul className="space-y-2">
              {enrollments.slice(-6).reverse().map(e => {
                const s = students.find(x => x.id === e.studentId)
                const c = courses.find(x => x.id === e.courseId)
                return (
                  <li key={e.id} className="text-sm border-b pb-2">
                    <b>{s?.fullName ?? 'Unknown'}</b> →{' '}
                    <span className="font-semibold text-brand">{c?.code ?? 'N/A'}</span>{' '}
                    <span className="text-neutral-600">
                      ({new Date(e.createdAt).toLocaleString()})
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
          <div className="mt-4">
            <Link to="/enrollments" className="btn-ghost">Open Enrollments</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
