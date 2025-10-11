import React, { useEffect, useMemo, useState } from 'react'
import { api } from '../api'
import type { Course, Student, Enrollment } from '../types'

export default function StudentPortal() {
  const [students, setStudents] = useState<Student[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [studentId, setStudentId] = useState<string>('') // “logged-in” student (demo)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState<string>('')   // courseId while enrolling
  const [unenrolling, setUnenrolling] = useState<string>('') // enrollmentId while unenrolling

  async function loadAll() {
    setLoading(true)
    const [ss, cs, es] = await Promise.all([
      api.getStudents(),
      api.getCourses(),
      api.getEnrollments(),
    ])
    setStudents(ss); setCourses(cs); setEnrollments(es)
    // pick the first student as “logged in” for demo
    if (!studentId && ss.length) setStudentId(ss[0].id)
    setLoading(false)
  }

  useEffect(() => { loadAll() }, [])

  // Data scoped to selected student
  const myEnrollments = useMemo(
    () => enrollments.filter(e => e.studentId === studentId),
    [enrollments, studentId]
  )
  const enrolledCourseIds = useMemo(
    () => new Set(myEnrollments.map(e => e.courseId)),
    [myEnrollments]
  )
  const myCourses = useMemo(
    () => courses.filter(c => enrolledCourseIds.has(c.id)),
    [courses, enrolledCourseIds]
  )
  const availableCourses = useMemo(
    () => courses.filter(c => !enrolledCourseIds.has(c.id)),
    [courses, enrolledCourseIds]
  )
  const totalCredits = useMemo(
    () => myCourses.reduce((sum, c) => sum + (c.credits || 0), 0),
    [myCourses]
  )

  async function enroll(courseId: string) {
    if (!studentId) return
    setEnrolling(courseId)
    await api.enroll(studentId, courseId)
    setEnrolling('')
    loadAll()
  }

  async function unenroll(enrollmentId: string) {
    setUnenrolling(enrollmentId)
    await api.unenroll(enrollmentId)
    setUnenrolling('')
    loadAll()
  }

  const me = students.find(s => s.id === studentId)

  return (
    <div className="fade-in space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-card border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Student Portal</h1>
            <p className="text-neutral-600 mt-1">
              Browse courses, enroll, and track your schedule & credits.
            </p>
          </div>

          {/* “Logged-in” student selector (demo) */}
          <div className="flex items-center gap-3">
            <label className="label m-0">You are:</label>
            <select
              className="input"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
            >
              <option value="" disabled>Select student</option>
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.fullName}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <div className="text-sm text-neutral-600 mb-1">Enrolled Courses</div>
          <div className="text-4xl font-bold">{myCourses.length}</div>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-600 mb-1">Total Credits</div>
          <div className="text-4xl font-bold">{totalCredits}</div>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-600 mb-1">Available Courses</div>
          <div className="text-4xl font-bold">{availableCourses.length}</div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* My Schedule / Enrollments */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">My Schedule</h2>

          {loading ? (
            <p className="text-neutral-600 text-sm">Loading…</p>
          ) : myEnrollments.length === 0 ? (
            <p className="text-neutral-600 text-sm">
              You are not enrolled in any courses yet.
            </p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th className="th">Course</th>
                  <th className="th">Title</th>
                  <th className="th">Credits</th>
                  <th className="th text-right"></th>
                </tr>
              </thead>
              <tbody>
                {myEnrollments.map(e => {
                  const c = courses.find(x => x.id === e.courseId)
                  if (!c) return null
                  return (
                    <tr key={e.id}>
                      <td className="td font-semibold text-brand">{c.code}</td>
                      <td className="td">{c.title}</td>
                      <td className="td">{c.credits}</td>
                      <td className="td text-right">
                        <button
                          className="text-red-600 hover:underline disabled:opacity-60"
                          disabled={unenrolling === e.id}
                          onClick={() => unenroll(e.id)}
                        >
                          {unenrolling === e.id ? 'Removing…' : 'Unenroll'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
          <p className="text-xs text-neutral-600 mt-3">
            * Schedule timing is placeholder for now; we’ll map real days/times when the backend provides them.
          </p>
        </div>

        {/* Course Catalog (enroll) */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Browse & Enroll</h2>
          {loading ? (
            <p className="text-neutral-600 text-sm">Loading…</p>
          ) : availableCourses.length === 0 ? (
            <p className="text-neutral-600 text-sm">No more courses to enroll.</p>
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
                {availableCourses.map(c => (
                  <tr key={c.id}>
                    <td className="td font-semibold">{c.code}</td>
                    <td className="td">{c.title}</td>
                    <td className="td">{c.credits}</td>
                    <td className="td text-right">
                      <button
                        className="btn-primary disabled:opacity-60"
                        disabled={!studentId || enrolling === c.id}
                        onClick={() => enroll(c.id)}
                      >
                        {enrolling === c.id ? 'Enrolling…' : 'Enroll'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Profile Card */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>
        {me ? (
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-neutral-600">Name</div>
              <div className="font-semibold">{me.fullName}</div>
            </div>
            <div>
              <div className="text-neutral-600">Email</div>
              <div className="font-semibold">{me.email || '—'}</div>
            </div>
            <div>
              <div className="text-neutral-600">Credits</div>
              <div className="font-semibold">{totalCredits}</div>
            </div>
          </div>
        ) : (
          <p className="text-neutral-600 text-sm">Select a student above.</p>
        )}
      </div>
    </div>
  )
}
