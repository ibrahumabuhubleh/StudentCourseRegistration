import React, { useEffect, useState } from 'react'
import { api } from '../api'
import type { Student } from '../types'

export default function Students() {
  const [items, setItems] = useState<Student[]>([])
  const [form, setForm] = useState({ fullName: '', email: '' })

  async function load() {
    setItems(await api.getStudents())
  }
  useEffect(() => { load() }, [])

  async function addStudent(e: React.FormEvent) {
    e.preventDefault()
    if (!form.fullName || !form.email) return
    await api.createStudent({ ...form })
    setForm({ fullName: '', email: '' })
    load()
  }

  async function remove(id: string) {
    await api.deleteStudent(id)
    load()
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 fade-in">
      {/* Add Student Form */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Add Student</h2>
        <form onSubmit={addStudent} className="space-y-3">
          <div>
            <label className="label">Full Name</label>
            <input
              className="input"
              placeholder="e.g. Alice Johnson"
              value={form.fullName}
              onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              className="input"
              placeholder="e.g. alice@example.com"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <button className="btn-primary w-full">Add Student</button>
        </form>
      </div>

      {/* Students List */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Students</h2>
        {items.length === 0 ? (
          <p className="text-slate-500 text-sm">No students yet. Add one on the left.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th className="th">Name</th>
                <th className="th">Email</th>
                <th className="th text-right"></th>
              </tr>
            </thead>
            <tbody>
              {items.map(s => (
                <tr key={s.id}>
                  <td className="td font-medium">{s.fullName}</td>
                  <td className="td">{s.email}</td>
                  <td className="td text-right">
                    <button
                      onClick={() => remove(s.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
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
