import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { api } from '../api';
export default function Students() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ fullName: '', email: '' });
    async function load() {
        setItems(await api.getStudents());
    }
    useEffect(() => { load(); }, []);
    async function addStudent(e) {
        e.preventDefault();
        if (!form.fullName || !form.email)
            return;
        await api.createStudent({ ...form });
        setForm({ fullName: '', email: '' });
        load();
    }
    async function remove(id) {
        await api.deleteStudent(id);
        load();
    }
    return (_jsxs("div", { className: "grid gap-6 md:grid-cols-2 fade-in", children: [_jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Add Student" }), _jsxs("form", { onSubmit: addStudent, className: "space-y-3", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Full Name" }), _jsx("input", { className: "input", placeholder: "e.g. Alice Johnson", value: form.fullName, onChange: e => setForm(f => ({ ...f, fullName: e.target.value })) })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Email" }), _jsx("input", { className: "input", placeholder: "e.g. alice@example.com", type: "email", value: form.email, onChange: e => setForm(f => ({ ...f, email: e.target.value })) })] }), _jsx("button", { className: "btn-primary w-full", children: "Add Student" })] })] }), _jsxs("div", { className: "card", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Students" }), items.length === 0 ? (_jsx("p", { className: "text-slate-500 text-sm", children: "No students yet. Add one on the left." })) : (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "th", children: "Name" }), _jsx("th", { className: "th", children: "Email" }), _jsx("th", { className: "th text-right" })] }) }), _jsx("tbody", { children: items.map(s => (_jsxs("tr", { children: [_jsx("td", { className: "td font-medium", children: s.fullName }), _jsx("td", { className: "td", children: s.email }), _jsx("td", { className: "td text-right", children: _jsx("button", { onClick: () => remove(s.id), className: "text-red-600 hover:underline", children: "Delete" }) })] }, s.id))) })] }))] })] }));
}
