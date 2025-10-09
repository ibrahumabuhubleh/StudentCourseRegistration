import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export default function NotFound() {
    return (_jsxs("div", { className: "fade-in flex flex-col items-center justify-center py-24 text-center", children: [_jsx("div", { className: "text-6xl font-bold text-slate-800", children: "404" }), _jsx("p", { className: "mt-2 text-slate-500", children: "The page you\u2019re looking for doesn\u2019t exist." }), _jsx(Link, { to: "/", className: "btn-primary mt-6", children: "Go back home" })] }));
}
