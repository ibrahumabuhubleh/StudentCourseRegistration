import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Catalog() {
    const [q, setQ] = useState('');
    const [data, setData] = useState([]);
    async function load() {
        const res = await axios.get(`/api/courses`, { params: { q } });
        setData(res.data);
    }
    useEffect(() => { load(); }, []);
    return (_jsxs("div", { children: [_jsx("h2", { children: "Course Catalog" }), _jsxs("div", { style: { display: 'flex', gap: 8, marginBottom: 12 }, children: [_jsx("input", { placeholder: "Search code or title", value: q, onChange: e => setQ(e.target.value) }), _jsx("button", { onClick: load, children: "Search" })] }), _jsxs("table", { width: "100%", cellPadding: 8, style: { borderCollapse: 'collapse' }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Code" }), _jsx("th", { children: "Title" }), _jsx("th", { children: "Credits" })] }) }), _jsx("tbody", { children: data.map(c => (_jsxs("tr", { style: { borderTop: '1px solid #eee' }, children: [_jsx("td", { children: c.code }), _jsx("td", { children: c.title }), _jsx("td", { children: c.credits })] }, c.id))) })] }), _jsx("p", { style: { marginTop: 8, fontSize: 12 }, children: "Tip: seed a few courses via POST /api/courses" })] }));
}
