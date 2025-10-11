import axios from 'axios'
import { db } from '../mock/db'
import type { Course, Student, Enrollment, ID } from '../types'

// Toggle this to false when your backend is ready
const USE_MOCK = true

const http = axios.create({
baseURL: '/api',
})

export const api = {
// Courses
async getCourses(): Promise<Course[]> {
    if (USE_MOCK) return db.listCourses()
    const { data } = await http.get('/courses')
    return data
  },
  async createCourse(input: Omit<Course, 'id'>): Promise<Course> {
    if (USE_MOCK) return db.createCourse(input)
    const { data } = await http.post('/courses', input)
    return data
  },
  async updateCourse(id: ID, patch: Partial<Course>): Promise<Course> {
    if (USE_MOCK) return db.updateCourse(id, patch)
    const { data } = await http.patch(`/courses/${id}`, patch)
    return data
  },
  async deleteCourse(id: ID): Promise<void> {
    if (USE_MOCK) return db.deleteCourse(id)
    await http.delete(`/courses/${id}`)
  },

  // Students
  async getStudents(): Promise<Student[]> {
    if (USE_MOCK) return db.listStudents()
    const { data } = await http.get('/students')
    return data
  },
  async createStudent(input: Omit<Student, 'id'>): Promise<Student> {
    if (USE_MOCK) return db.createStudent(input)
    const { data } = await http.post('/students', input)
    return data
  },
  async deleteStudent(id: ID): Promise<void> {
    if (USE_MOCK) return db.deleteStudent(id)
    await http.delete(`/students/${id}`)
  },

  // Enrollments
  async getEnrollments(): Promise<Enrollment[]> {
    if (USE_MOCK) return db.listEnrollments()
    const { data } = await http.get('/enrollments')
    return data
  },
  async enroll(studentId: ID, courseId: ID): Promise<Enrollment> {
    if (USE_MOCK) return db.enroll(studentId, courseId)
    const { data } = await http.post('/enrollments', { studentId, courseId })
    return data
  },
  async unenroll(id: ID): Promise<void> {
    if (USE_MOCK) return db.unenroll(id)
    await http.delete(`/enrollments/${id}`)
  },
}
