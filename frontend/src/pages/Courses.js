import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { api } from '../api';
export default function Courses() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ code: '', title: '', credits: 3, description: '' });
    async function load() {
        setItems(await api.getCourses());
    }
    useEffect(() => {
        load();
    }, []);
    async function addCourse(e) {
        e.preventDefault();
        if (!form.code || !form.title)
            return;
        await api.createCourse({ ...form });
        setForm({ code: '', title: '', credits: 3, description: '' });
        load();
    }
    async function remove(id) {
        await api.deleteCourse(id);
        load();
    }
    return (_jsxs("div", { className: "grid gap-6 md:grid-cols-2 fade-in", children: [_jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Add Course" }), _jsxs("form", { onSubmit: addCourse, className: "space-y-3", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Course Code" }), _jsx("input", { className: "input", placeholder: "e.g. CS101", value: form.code, onChange: e => setForm(f => ({ ...f, code: e.target.value })) })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Title" }), _jsx("input", { className: "input", placeholder: "e.g. Intro to Programming", value: form.title, onChange: e => setForm(f => ({ ...f, title: e.target.value })) })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Credits" }), _jsx("input", { type: "number", min: 0, className: "input", value: form.credits, onChange: e => setForm(f => ({ ...f, credits: Number(e.target.value) })) })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Description" }), _jsx("textarea", { className: "input min-h-[80px]", placeholder: "Optional short summary", value: form.description, onChange: e => setForm(f => ({ ...f, description: e.target.value })) })] }), _jsx("button", { className: "btn-primary w-full", children: "Add Course" })] })] }), _jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Courses" }), items.length === 0 ? (_jsx("p", { className: "text-slate-500 text-sm", children: "No courses yet. Add one on the left." })) : (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "th", children: "Code" }), _jsx("th", { className: "th", children: "Title" }), _jsx("th", { className: "th", children: "Credits" }), _jsx("th", { className: "th text-right" })] }) }), _jsx("tbody", { children: items.map(c => (_jsxs("tr", { children: [_jsx("td", { className: "td font-medium", children: c.code }), _jsx("td", { className: "td", children: c.title }), _jsx("td", { className: "td", children: c.credits }), _jsx("td", { className: "td text-right", children: _jsx("button", { onClick: () => remove(c.id), className: "text-red-600 hover:underline", children: "Delete" }) })] }, c.id))) })] }))] })] }));
}
