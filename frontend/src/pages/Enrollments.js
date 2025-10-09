import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { api } from '../api';
export default function Enrollments() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ studentId: '', courseId: '' });
    async function load() {
        setCourses(await api.getCourses());
        setStudents(await api.getStudents());
        setItems(await api.getEnrollments());
    }
    useEffect(() => { load(); }, []);
    async function add(e) {
        e.preventDefault();
        if (!form.studentId || !form.courseId)
            return;
        await api.enroll(form.studentId, form.courseId);
        setForm({ studentId: '', courseId: '' });
        load();
    }
    async function remove(id) {
        await api.unenroll(id);
        load();
    }
    const lookup = useMemo(() => ({
        student: (id) => students.find(s => s.id === id)?.fullName ?? 'Unknown',
        course: (id) => courses.find(c => c.id === id)?.code ?? 'Unknown',
    }), [students, courses]);
    return (_jsxs("div", { className: "grid gap-6 md:grid-cols-2 fade-in", children: [_jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Enroll Student" }), _jsxs("form", { onSubmit: add, className: "space-y-3", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Student" }), _jsxs("select", { className: "input", value: form.studentId, onChange: e => setForm(f => ({ ...f, studentId: e.target.value })), children: [_jsx("option", { value: "", children: "Select student" }), students.map(s => (_jsx("option", { value: s.id, children: s.fullName }, s.id)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Course" }), _jsxs("select", { className: "input", value: form.courseId, onChange: e => setForm(f => ({ ...f, courseId: e.target.value })), children: [_jsx("option", { value: "", children: "Select course" }), courses.map(c => (_jsxs("option", { value: c.id, children: [c.code, " \u2014 ", c.title] }, c.id)))] })] }), _jsx("button", { className: "btn-primary w-full", children: "Enroll" })] })] }), _jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Enrollments" }), items.length === 0 ? (_jsx("p", { className: "text-slate-500 text-sm", children: "No enrollments yet. Create one on the left." })) : (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "th", children: "Student" }), _jsx("th", { className: "th", children: "Course" }), _jsx("th", { className: "th", children: "When" }), _jsx("th", { className: "th text-right" })] }) }), _jsx("tbody", { children: items.map(e => (_jsxs("tr", { children: [_jsx("td", { className: "td font-medium", children: lookup.student(e.studentId) }), _jsx("td", { className: "td", children: lookup.course(e.courseId) }), _jsx("td", { className: "td", children: new Date(e.createdAt).toLocaleString() }), _jsx("td", { className: "td text-right", children: _jsx("button", { onClick: () => remove(e.id), className: "text-red-600 hover:underline", children: "Unenroll" }) })] }, e.id))) })] }))] })] }));
}
