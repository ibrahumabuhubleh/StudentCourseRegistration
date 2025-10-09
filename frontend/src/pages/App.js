import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function App() {
    return (_jsxs("div", { className: "min-h-screen bg-slate-50 text-slate-900 flex flex-col", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-1 container-page py-8 fade-in", children: _jsx(Outlet, {}) }), _jsx("footer", { className: "border-t bg-white mt-10", children: _jsx("div", { className: "container-page py-4 text-xs text-slate-500 text-center", children: "React + Vite + Tailwind \u00B7 Student Management System (Frontend Only)" }) })] }));
}
