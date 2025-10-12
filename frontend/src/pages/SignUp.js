import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function SignUp() {
    const [role, setRole] = useState('student');
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!form.fullName || !form.email || !form.password) {
            alert('Please complete all required fields.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        console.log('Sign Up (frontend only):', { role, ...form });
        alert(`Welcome to LearnMate Academy, ${form.fullName}! (Frontend only)`);
    }
    return (_jsx("div", { className: "min-h-[70vh] flex items-center justify-center", children: _jsxs("div", { className: "card w-full max-w-xl", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Create your account" }), _jsxs("p", { className: "text-neutral-600 mt-1", children: ["Join LearnMate Academy as a ", role === 'student' ? 'student' : 'teacher', "."] }), _jsxs("div", { className: "mt-4 flex gap-2", children: [_jsx("button", { className: 'btn-ghost ' + (role === 'student' ? 'ring-1 ring-neutral-200' : ''), onClick: () => setRole('student'), children: "I\u2019m a Student" }), _jsx("button", { className: 'btn-ghost ' + (role === 'teacher' ? 'ring-1 ring-neutral-200' : ''), onClick: () => setRole('teacher'), children: "I\u2019m a Teacher" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-6", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Full Name" }), _jsx("input", { className: "input", name: "fullName", placeholder: "e.g. Alex Carter", value: form.fullName, onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Email" }), _jsx("input", { className: "input", type: "email", name: "email", placeholder: "e.g. alex@example.com", value: form.email, onChange: handleChange, required: true })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Password" }), _jsx("input", { className: "input", type: "password", name: "password", value: form.password, onChange: handleChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Confirm Password" }), _jsx("input", { className: "input", type: "password", name: "confirmPassword", value: form.confirmPassword, onChange: handleChange, required: true })] })] }), _jsx("button", { className: "btn-primary w-full", children: "Create Account" })] }), _jsx("p", { className: "text-center text-neutral-600 mt-6 text-sm", children: "By continuing you agree to our Terms of Service and Privacy Policy." })] }) }));
}
