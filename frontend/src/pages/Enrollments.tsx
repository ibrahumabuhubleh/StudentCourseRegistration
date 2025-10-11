import React, { useEffect, useMemo, useState } from 'react'
import { api } from '../api'
import type { Course, Student, Enrollment } from '../types'

export default function Enrollments() {
  const [courses, setCourses] = useState<Course[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [items, setItems] = useState<Enrollment[]>([])
  const [form, setForm] = useState({ studentId: '', courseId: '' })

  async function load() {
    setCourses(await api.getCourses())
    setStudents(await api.getStudents())
    setItems(await api.getEnrollments())
  }
  useEffect(() => { load() }, [])

  async function add(e: React.FormEvent) {
    e.preventDefault()
    if (!form.studentId || !form.courseId) return
    await api.enroll(form.studentId, form.courseId)
    setForm({ studentId: '', courseId: '' })
    load()
  }
  async function remove(id: string) {
    await api.unenroll(id)
    load()
  }

  const lookup = useMemo(() => ({
    student: (id: string) => students.find(s => s.id === id)?.fullName ?? 'Unknown',
    course: (id: string) => courses.find(c => c.id === id)?.code ?? 'Unknown',
  }), [students, courses])

  return (
    <div className="grid gap-6 md:grid-cols-2 fade-in">
      {/* Enroll Form */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Enroll Student</h2>
        <form onSubmit={add} className="space-y-3">
          <div>
            <label className="label">Student</label>
            <select
              className="input"
              value={form.studentId}
              onChange={e => setForm(f => ({ ...f, studentId: e.target.value }))}
            >
              <option value="">Select student</option>
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.fullName}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="label">Course</label>
            <select
              className="input"
              value={form.courseId}
              onChange={e => setForm(f => ({ ...f, courseId: e.target.value }))}
            >
              <option value="">Select course</option>
              {courses.map(c => (
                <option key={c.id} value={c.id}>{c.code} — {c.title}</option>
              ))}
            </select>
          </div>

          <button className="btn-primary w-full">Enroll</button>
        </form>
      </div>

      {/* Enrollments List */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Enrollments</h2>
        {items.length === 0 ? (
          <p className="text-slate-500 text-sm">No enrollments yet. Create one on the left.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th className="th">Student</th>
                <th className="th">Course</th>
                <th className="th">When</th>
                <th className="th text-right"></th>
              </tr>
            </thead>
            <tbody>
              {items.map(e => (
                <tr key={e.id}>
                  <td className="td font-medium">{lookup.student(e.studentId)}</td>
                  <td className="td">{lookup.course(e.courseId)}</td>
                  <td className="td">{new Date(e.createdAt).toLocaleString()}</td>
                  <td className="td text-right">
                    <button onClick={() => remove(e.id)} className="text-red-600 hover:underline">
                      Unenroll
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
