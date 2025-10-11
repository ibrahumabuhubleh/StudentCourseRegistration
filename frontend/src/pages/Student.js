import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { api } from '../api';
export default function StudentPortal() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [enrollments, setEnrollments] = useState([]);
    const [studentId, setStudentId] = useState(''); // “logged-in” student (demo)
    const [loading, setLoading] = useState(true);
    const [enrolling, setEnrolling] = useState(''); // courseId while enrolling
    const [unenrolling, setUnenrolling] = useState(''); // enrollmentId while unenrolling
    async function loadAll() {
        setLoading(true);
        const [ss, cs, es] = await Promise.all([
            api.getStudents(),
            api.getCourses(),
            api.getEnrollments(),
        ]);
        setStudents(ss);
        setCourses(cs);
        setEnrollments(es);
        // pick the first student as “logged in” for demo
        if (!studentId && ss.length)
            setStudentId(ss[0].id);
        setLoading(false);
    }
    useEffect(() => { loadAll(); }, []);
    // Data scoped to selected student
    const myEnrollments = useMemo(() => enrollments.filter(e => e.studentId === studentId), [enrollments, studentId]);
    const enrolledCourseIds = useMemo(() => new Set(myEnrollments.map(e => e.courseId)), [myEnrollments]);
    const myCourses = useMemo(() => courses.filter(c => enrolledCourseIds.has(c.id)), [courses, enrolledCourseIds]);
    const availableCourses = useMemo(() => courses.filter(c => !enrolledCourseIds.has(c.id)), [courses, enrolledCourseIds]);
    const totalCredits = useMemo(() => myCourses.reduce((sum, c) => sum + (c.credits || 0), 0), [myCourses]);
    async function enroll(courseId) {
        if (!studentId)
            return;
        setEnrolling(courseId);
        await api.enroll(studentId, courseId);
        setEnrolling('');
        loadAll();
    }
    async function unenroll(enrollmentId) {
        setUnenrolling(enrollmentId);
        await api.unenroll(enrollmentId);
        setUnenrolling('');
        loadAll();
    }
    const me = students.find(s => s.id === studentId);
    return (_jsxs("div", { className: "fade-in space-y-6", children: [_jsx("div", { className: "bg-white rounded-2xl p-6 shadow-card border", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold", children: "Student Portal" }), _jsx("p", { className: "text-neutral-600 mt-1", children: "Browse courses, enroll, and track your schedule & credits." })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("label", { className: "label m-0", children: "You are:" }), _jsxs("select", { className: "input", value: studentId, onChange: e => setStudentId(e.target.value), children: [_jsx("option", { value: "", disabled: true, children: "Select student" }), students.map(s => (_jsx("option", { value: s.id, children: s.fullName }, s.id)))] })] })] }) }), _jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [_jsxs("div", { className: "card", children: [_jsx("div", { className: "text-sm text-neutral-600 mb-1", children: "Enrolled Courses" }), _jsx("div", { className: "text-4xl font-bold", children: myCourses.length })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "text-sm text-neutral-600 mb-1", children: "Total Credits" }), _jsx("div", { className: "text-4xl font-bold", children: totalCredits })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "text-sm text-neutral-600 mb-1", children: "Available Courses" }), _jsx("div", { className: "text-4xl font-bold", children: availableCourses.length })] })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [_jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "My Schedule" }), loading ? (_jsx("p", { className: "text-neutral-600 text-sm", children: "Loading\u2026" })) : myEnrollments.length === 0 ? (_jsx("p", { className: "text-neutral-600 text-sm", children: "You are not enrolled in any courses yet." })) : (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "th", children: "Course" }), _jsx("th", { className: "th", children: "Title" }), _jsx("th", { className: "th", children: "Credits" }), _jsx("th", { className: "th text-right" })] }) }), _jsx("tbody", { children: myEnrollments.map(e => {
                                            const c = courses.find(x => x.id === e.courseId);
                                            if (!c)
                                                return null;
                                            return (_jsxs("tr", { children: [_jsx("td", { className: "td font-semibold text-brand", children: c.code }), _jsx("td", { className: "td", children: c.title }), _jsx("td", { className: "td", children: c.credits }), _jsx("td", { className: "td text-right", children: _jsx("button", { className: "text-red-600 hover:underline disabled:opacity-60", disabled: unenrolling === e.id, onClick: () => unenroll(e.id), children: unenrolling === e.id ? 'Removing…' : 'Unenroll' }) })] }, e.id));
                                        }) })] })), _jsx("p", { className: "text-xs text-neutral-600 mt-3", children: "* Schedule timing is placeholder for now; we\u2019ll map real days/times when the backend provides them." })] }), _jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Browse & Enroll" }), loading ? (_jsx("p", { className: "text-neutral-600 text-sm", children: "Loading\u2026" })) : availableCourses.length === 0 ? (_jsx("p", { className: "text-neutral-600 text-sm", children: "No more courses to enroll." })) : (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "th", children: "Code" }), _jsx("th", { className: "th", children: "Title" }), _jsx("th", { className: "th", children: "Credits" }), _jsx("th", { className: "th text-right" })] }) }), _jsx("tbody", { children: availableCourses.map(c => (_jsxs("tr", { children: [_jsx("td", { className: "td font-semibold", children: c.code }), _jsx("td", { className: "td", children: c.title }), _jsx("td", { className: "td", children: c.credits }), _jsx("td", { className: "td text-right", children: _jsx("button", { className: "btn-primary disabled:opacity-60", disabled: !studentId || enrolling === c.id, onClick: () => enroll(c.id), children: enrolling === c.id ? 'Enrolling…' : 'Enroll' }) })] }, c.id))) })] }))] })] }), _jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Profile" }), me ? (_jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("div", { className: "text-neutral-600", children: "Name" }), _jsx("div", { className: "font-semibold", children: me.fullName })] }), _jsxs("div", { children: [_jsx("div", { className: "text-neutral-600", children: "Email" }), _jsx("div", { className: "font-semibold", children: me.email || '—' })] }), _jsxs("div", { children: [_jsx("div", { className: "text-neutral-600", children: "Credits" }), _jsx("div", { className: "font-semibold", children: totalCredits })] })] })) : (_jsx("p", { className: "text-neutral-600 text-sm", children: "Select a student above." }))] })] }));
}
