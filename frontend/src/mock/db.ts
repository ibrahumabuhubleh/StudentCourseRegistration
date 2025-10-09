import { Course, Student, Enrollment, ID } from '../types'

const LS = typeof window !== 'undefined' ? window.localStorage : null

const KEYS = {
courses: 'sms.courses',
students: 'sms.students',
enrollments: 'sms.enrollments',
} as const

function read<T>(key: string, fallback: T): T {
if (!LS) return fallback
  const raw = LS.getItem(key)
  if (!raw) return fallback
  try { return JSON.parse(raw) as T } catch { return fallback }
}

function write<T>(key: string, value: T) {
  if (!LS) return
  LS.setItem(key, JSON.stringify(value))
}

function uid(): ID {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4)
}

function seedOnce() {
  const seededCourses = read<Course[] | null>(KEYS.courses, null)
  if (!seededCourses) {
    const courses: Course[] = [
      { id: uid(), code: 'CS101', title: 'Intro to Programming', credits: 3, description: 'Start coding with TypeScript & JS.' },
      { id: uid(), code: 'DS201', title: 'Data Science Basics', credits: 4, description: 'Pandas, plots, and models.' },
      { id: uid(), code: 'UX150', title: 'UX Design Foundations', credits: 2, description: 'Research, wireframes, usability.' },
    ]
    const students: Student[] = [
      { id: uid(), fullName: 'Alice Johnson', email: 'alice@example.com' },
      { id: uid(), fullName: 'Ravi Kumar', email: 'ravi@example.com' },
    ]
    write(KEYS.courses, courses)
    write(KEYS.students, students)
    write(KEYS.enrollments, [] as Enrollment[])
  }
}
seedOnce()

const delay = (ms = 200) => new Promise(res => setTimeout(res, ms))

export const db = {
  // Courses
  async listCourses(): Promise<Course[]> {
    await delay()
    return read<Course[]>(KEYS.courses, [])
  },
  async createCourse(input: Omit<Course, 'id'>): Promise<Course> {
    await delay()
    const items = read<Course[]>(KEYS.courses, [])
    const item = { ...input, id: uid() }
    items.push(item)
    write(KEYS.courses, items)
    return item
  },
  async updateCourse(id: ID, patch: Partial<Course>): Promise<Course> {
    await delay()
    const items = read<Course[]>(KEYS.courses, [])
    const idx = items.findIndex(c => c.id === id)
    if (idx === -1) throw new Error('Course not found')
    items[idx] = { ...items[idx], ...patch }
    write(KEYS.courses, items)
    return items[idx]
  },
  async deleteCourse(id: ID): Promise<void> {
    await delay()
    const items = read<Course[]>(KEYS.courses, [])
    write(KEYS.courses, items.filter(c => c.id !== id))
  },

  // Students
  async listStudents(): Promise<Student[]> {
    await delay()
    return read<Student[]>(KEYS.students, [])
  },
  async createStudent(input: Omit<Student, 'id'>): Promise<Student> {
    await delay()
    const items = read<Student[]>(KEYS.students, [])
    const item = { ...input, id: uid() }
    items.push(item)
    write(KEYS.students, items)
    return item
  },
  async deleteStudent(id: ID): Promise<void> {
    await delay()
    const items = read<Student[]>(KEYS.students, [])
    write(KEYS.students, items.filter(s => s.id !== id))
  },

  // Enrollments
  async listEnrollments(): Promise<Enrollment[]> {
    await delay()
    return read<Enrollment[]>(KEYS.enrollments, [])
  },
  async enroll(studentId: ID, courseId: ID): Promise<Enrollment> {
    await delay()
    const items = read<Enrollment[]>(KEYS.enrollments, [])
    const newItem: Enrollment = { id: uid(), studentId, courseId, createdAt: new Date().toISOString() }
    items.push(newItem)
    write(KEYS.enrollments, items)
    return newItem
  },
  async unenroll(id: ID): Promise<void> {
    await delay()
    const items = read<Enrollment[]>(KEYS.enrollments, [])
    write(KEYS.enrollments, items.filter(e => e.id !== id))
  },
}
