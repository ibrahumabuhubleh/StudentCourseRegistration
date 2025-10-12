import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
const tabs = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/students', label: 'Students' },
    { to: '/enrollments', label: 'Enrollments' },
    { to: '/teacher', label: 'Teacher' },
    { to: '/student', label: 'Student' },
];
export default function Navbar() {
    const { pathname } = useLocation();
    return (_jsx("header", { className: "bg-white/90 backdrop-blur border-b sticky top-0 z-20", children: _jsxs("div", { className: "container-page h-16 flex items-center justify-between", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [_jsx("img", { src: "/logo.jpg", alt: "Learnify", className: "h-9 w-9 rounded-lg object-cover ring-1 ring-neutral-100" }), _jsxs("div", { className: "flex flex-col leading-tight", children: [_jsx("span", { className: "text-lg font-bold", style: { fontFamily: '"Crimson Text", Georgia, serif' }, children: "Learnify" }), _jsx("span", { className: "text-xs text-neutral-600 -mt-0.5", children: "Empower Your Learning Journey" })] })] }), _jsxs("nav", { className: "flex items-center gap-1", children: [tabs.map(t => {
                            const active = pathname === t.to;
                            return (_jsx(Link, { to: t.to, className: 'px-3 py-2 rounded-xl text-sm transition-colors ' +
                                    (active
                                        ? 'bg-neutral-100 text-neutral-900 font-semibold'
                                        : 'text-neutral-900 hover:bg-neutral-100'), children: t.label }, t.to));
                        }), _jsxs("div", { className: "ml-2 flex items-center gap-2", children: [_jsx(Link, { to: "/signup", className: "btn-ghost", children: "Sign up" }), _jsx("button", { className: "btn-primary", children: "Sign in" })] })] })] }) }));
}
