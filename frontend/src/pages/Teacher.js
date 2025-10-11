import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
export default function Teacher() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [enrollments, setEnrollments] = useState([]);
    const [form, setForm] = useState({ code: '', title: '', credits: 3, description: '' });
    const [saving, setSaving] = useState(false);
    async function load() {
        const [cs, ss, es] = await Promise.all([
            api.getCourses(),
            api.getStudents(),
            api.getEnrollments(),
        ]);
        setCourses(cs);
        setStudents(ss);
        setEnrollments(es);
    }
    useEffect(() => { load(); }, []);
    async function addCourse(e) {
        e.preventDefault();
        if (!form.code || !form.title)
            return;
        setSaving(true);
        await api.createCourse({ ...form });
        setForm({ code: '', title: '', credits: 3, description: '' });
        setSaving(false);
        load();
    }
    return (_jsxs("div", { className: "fade-in space-y-6", children: [_jsx("div", { className: "bg-white rounded-2xl p-6 shadow-card border", children: _jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold", children: "Teacher Portal" }), _jsx("p", { className: "text-neutral-600 mt-1", children: "Create courses, manage students, and review enrollments." })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Link, { to: "/courses", className: "btn-ghost", children: "Manage Courses" }), _jsx(Link, { to: "/students", className: "btn-ghost", children: "Manage Students" }), _jsx(Link, { to: "/enrollments", className: "btn-primary", children: "Manage Enrollments" })] })] }) }), _jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [_jsxs("div", { className: "card", children: [_jsx("div", { className: "text-sm text-neutral-600 mb-1", children: "Total Courses" }), _jsx("div", { className: "text-4xl font-bold", children: courses.length })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "text-sm text-neutral-600 mb-1", children: "Total Students" }), _jsx("div", { className: "text-4xl font-bold", children: students.length })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "text-sm text-neutral-600 mb-1", children: "Enrollments" }), _jsx("div", { className: "text-4xl font-bold", children: enrollments.length })] })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [_jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Quick Create Course" }), _jsxs("form", { onSubmit: addCourse, className: "space-y-3", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Course Code" }), _jsx("input", { className: "input", placeholder: "e.g. CS101", value: form.code, onChange: e => setForm(f => ({ ...f, code: e.target.value })) })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Title" }), _jsx("input", { className: "input", placeholder: "e.g. Intro to Programming", value: form.title, onChange: e => setForm(f => ({ ...f, title: e.target.value })) })] }), _jsxs("div", { className: "grid grid-cols-3 gap-3", children: [_jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "label", children: "Credits" }), _jsx("input", { type: "number", min: 0, className: "input", value: form.credits, onChange: e => setForm(f => ({ ...f, credits: Number(e.target.value) })) })] }), _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "label", children: "Short Description" }), _jsx("input", { className: "input", placeholder: "Optional", value: form.description, onChange: e => setForm(f => ({ ...f, description: e.target.value })) })] })] }), _jsx("button", { className: "btn-primary", disabled: saving, children: saving ? 'Creating…' : 'Create Course' })] })] }), _jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Recent Enrollments" }), enrollments.length === 0 ? (_jsx("p", { className: "text-neutral-600 text-sm", children: "No enrollments yet." })) : (_jsx("ul", { className: "space-y-2", children: enrollments.slice(-6).reverse().map(e => {
                                    const s = students.find(x => x.id === e.studentId);
                                    const c = courses.find(x => x.id === e.courseId);
                                    return (_jsxs("li", { className: "text-sm border-b pb-2", children: [_jsx("b", { children: s?.fullName ?? 'Unknown' }), " \u2192", ' ', _jsx("span", { className: "font-semibold text-brand", children: c?.code ?? 'N/A' }), ' ', _jsxs("span", { className: "text-neutral-600", children: ["(", new Date(e.createdAt).toLocaleString(), ")"] })] }, e.id));
                                }) })), _jsx("div", { className: "mt-4", children: _jsx(Link, { to: "/enrollments", className: "btn-ghost", children: "Open Enrollments" }) })] })] })] }));
}
