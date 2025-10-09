const LS = typeof window !== 'undefined' ? window.localStorage : null;
const KEYS = {
    courses: 'sms.courses',
    students: 'sms.students',
    enrollments: 'sms.enrollments',
};
function read(key, fallback) {
    if (!LS)
        return fallback;
    const raw = LS.getItem(key);
    if (!raw)
        return fallback;
    try {
        return JSON.parse(raw);
    }
    catch {
        return fallback;
    }
}
function write(key, value) {
    if (!LS)
        return;
    LS.setItem(key, JSON.stringify(value));
}
function uid() {
    return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}
function seedOnce() {
    const seededCourses = read(KEYS.courses, null);
    if (!seededCourses) {
        const courses = [
            { id: uid(), code: 'CS101', title: 'Intro to Programming', credits: 3, description: 'Start coding with TypeScript & JS.' },
            { id: uid(), code: 'DS201', title: 'Data Science Basics', credits: 4, description: 'Pandas, plots, and models.' },
            { id: uid(), code: 'UX150', title: 'UX Design Foundations', credits: 2, description: 'Research, wireframes, usability.' },
        ];
        const students = [
            { id: uid(), fullName: 'Alice Johnson', email: 'alice@example.com' },
            { id: uid(), fullName: 'Ravi Kumar', email: 'ravi@example.com' },
        ];
        write(KEYS.courses, courses);
        write(KEYS.students, students);
        write(KEYS.enrollments, []);
    }
}
seedOnce();
const delay = (ms = 200) => new Promise(res => setTimeout(res, ms));
export const db = {
    // Courses
    async listCourses() {
        await delay();
        return read(KEYS.courses, []);
    },
    async createCourse(input) {
        await delay();
        const items = read(KEYS.courses, []);
        const item = { ...input, id: uid() };
        items.push(item);
        write(KEYS.courses, items);
        return item;
    },
    async updateCourse(id, patch) {
        await delay();
        const items = read(KEYS.courses, []);
        const idx = items.findIndex(c => c.id === id);
        if (idx === -1)
            throw new Error('Course not found');
        items[idx] = { ...items[idx], ...patch };
        write(KEYS.courses, items);
        return items[idx];
    },
    async deleteCourse(id) {
        await delay();
        const items = read(KEYS.courses, []);
        write(KEYS.courses, items.filter(c => c.id !== id));
    },
    // Students
    async listStudents() {
        await delay();
        return read(KEYS.students, []);
    },
    async createStudent(input) {
        await delay();
        const items = read(KEYS.students, []);
        const item = { ...input, id: uid() };
        items.push(item);
        write(KEYS.students, items);
        return item;
    },
    async deleteStudent(id) {
        await delay();
        const items = read(KEYS.students, []);
        write(KEYS.students, items.filter(s => s.id !== id));
    },
    // Enrollments
    async listEnrollments() {
        await delay();
        return read(KEYS.enrollments, []);
    },
    async enroll(studentId, courseId) {
        await delay();
        const items = read(KEYS.enrollments, []);
        const newItem = { id: uid(), studentId, courseId, createdAt: new Date().toISOString() };
        items.push(newItem);
        write(KEYS.enrollments, items);
        return newItem;
    },
    async unenroll(id) {
        await delay();
        const items = read(KEYS.enrollments, []);
        write(KEYS.enrollments, items.filter(e => e.id !== id));
    },
};
