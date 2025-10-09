import React, { useEffect, useState } from 'react'
import { api } from '../api'
import type { Course, Student, Enrollment } from '../types'

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])

  useEffect(() => {
    api.getCourses().then(setCourses)
    api.getStudents().then(setStudents)
    api.getEnrollments().then(setEnrollments)
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-3 fade-in">
      {/* Stats Cards */}
      <div className="card text-center">
        <div className="text-sm text-slate-500 mb-1">Total Courses</div>
        <div className="text-4xl font-bold">{courses.length}</div>
      </div>

      <div className="card text-center">
        <div className="text-sm text-slate-500 mb-1">Total Students</div>
        <div className="text-4xl font-bold">{students.length}</div>
      </div>

      <div className="card text-center">
        <div className="text-sm text-slate-500 mb-1">Total Enrollments</div>
        <div className="text-4xl font-bold">{enrollments.length}</div>
      </div>

      {/* Recent Enrollments */}
      <div className="card md:col-span-3">
        <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>
        {enrollments.length === 0 ? (
          <p className="text-slate-500 text-sm">No enrollments yet.</p>
        ) : (
          <ul className="space-y-2">
            {enrollments
              .slice(-5)
              .reverse()
              .map(e => {
                const student = students.find(s => s.id === e.studentId)
                const course = courses.find(c => c.id === e.courseId)
                return (
                  <li key={e.id} className="text-sm border-b pb-2">
                    <b>{student?.fullName ?? 'Unknown'}</b> enrolled in{' '}
                    <span className="font-medium text-blue-700">
                      {course?.code ?? 'N/A'}
                    </span>{' '}
                    <span className="text-slate-500">
                      ({new Date(e.createdAt).toLocaleString()})
                    </span>
                  </li>
                )
              })}
          </ul>
        )}
      </div>
    </div>
  )
}
