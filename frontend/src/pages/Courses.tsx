import React, { useEffect, useState } from 'react'
import { api } from '../api'
import type { Course } from '../types'

export default function Courses() {
  const [items, setItems] = useState<Course[]>([])
  const [form, setForm] = useState({ code: '', title: '', credits: 3, description: '' })

  async function load() {
    setItems(await api.getCourses())
  }

  useEffect(() => {
    load()
  }, [])

  async function addCourse(e: React.FormEvent) {
    e.preventDefault()
    if (!form.code || !form.title) return
    await api.createCourse({ ...form })
    setForm({ code: '', title: '', credits: 3, description: '' })
    load()
  }

  async function remove(id: string) {
    await api.deleteCourse(id)
    load()
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 fade-in">
      {/* Add Course Form */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Add Course</h2>
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

          <div>
            <label className="label">Credits</label>
            <input
              type="number"
              min={0}
              className="input"
              value={form.credits}
              onChange={e => setForm(f => ({ ...f, credits: Number(e.target.value) }))}
            />
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              className="input min-h-[80px]"
              placeholder="Optional short summary"
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            />
          </div>

          <button className="btn-primary w-full">Add Course</button>
        </form>
      </div>

      {/* Courses List */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Courses</h2>
        {items.length === 0 ? (
          <p className="text-slate-500 text-sm">No courses yet. Add one on the left.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th className="th">Code</th>
                <th className="th">Title</th>
                <th className="th">Credits</th>
                <th className="th text-right"></th>
              </tr>
            </thead>
            <tbody>
              {items.map(c => (
                <tr key={c.id}>
                  <td className="td font-medium">{c.code}</td>
                  <td className="td">{c.title}</td>
                  <td className="td">{c.credits}</td>
                  <td className="td text-right">
                    <button
                      onClick={() => remove(c.id)}
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
