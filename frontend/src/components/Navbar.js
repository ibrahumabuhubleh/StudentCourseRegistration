import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
const tabs = [
    { to: '/', label: 'Dashboard' },
    { to: '/courses', label: 'Courses' },
    { to: '/students', label: 'Students' },
    { to: '/enrollments', label: 'Enrollments' },
    { to: '/register', label: 'Register' },
];
export default function Navbar() {
    const { pathname } = useLocation();
    return (_jsx("header", { className: "bg-white/90 backdrop-blur border-b sticky top-0 z-20", children: _jsxs("div", { className: "container-page h-14 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-8 w-8 rounded-xl bg-blue-600" }), _jsx("span", { className: "font-semibold", children: "Student Management" })] }), _jsx("nav", { className: "flex gap-1", children: tabs.map(t => {
                        const active = pathname === t.to;
                        return (_jsx(Link, { to: t.to, className: 'px-3 py-2 rounded-lg text-sm transition-colors ' +
                                (active
                                    ? 'bg-slate-200 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-100'), children: t.label }, t.to));
                    }) })] }) }));
}
