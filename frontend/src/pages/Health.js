import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Health() {
    const [status, setStatus] = useState('...');
    useEffect(() => {
        axios.get('/api/health').then(r => setStatus(r.data.status)).catch(() => setStatus('down'));
    }, []);
    return _jsxs("div", { children: [_jsx("h2", { children: "API Health" }), _jsxs("p", { children: ["Status: ", _jsx("b", { children: status })] })] });
}
