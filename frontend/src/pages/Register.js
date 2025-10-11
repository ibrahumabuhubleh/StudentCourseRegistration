import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        course: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // frontend-only demo
        console.log('Form Submitted:', formData);
        alert('Registration successful! (Frontend only)');
    };
    return (_jsx("div", { className: "min-h-[70vh] flex items-center justify-center", children: _jsxs("div", { className: "card w-full max-w-xl fade-in", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Student Registration" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Full Name" }), _jsx("input", { type: "text", name: "fullName", value: formData.fullName, onChange: handleChange, required: true, className: "input", placeholder: "e.g. Alice Johnson" })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Email Address" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "input", placeholder: "e.g. alice@example.com" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "label", children: "Password" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, required: true, className: "input" })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Confirm Password" }), _jsx("input", { type: "password", name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, required: true, className: "input" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Select Course" }), _jsxs("select", { name: "course", value: formData.course, onChange: handleChange, required: true, className: "input", children: [_jsx("option", { value: "", children: "-- Choose a Course --" }), _jsx("option", { value: "web-development", children: "Web Development" }), _jsx("option", { value: "data-science", children: "Data Science" }), _jsx("option", { value: "ai-ml", children: "AI & Machine Learning" }), _jsx("option", { value: "cybersecurity", children: "Cybersecurity" }), _jsx("option", { value: "ui-ux", children: "UI/UX Design" })] })] }), _jsxs("div", { className: "flex items-center gap-3 pt-2", children: [_jsx("button", { type: "submit", className: "btn-primary", children: "Register Now" }), _jsx("button", { type: "button", className: "btn-ghost", onClick: () => {
                                        setFormData({ fullName: '', email: '', password: '', confirmPassword: '', course: '' });
                                    }, children: "Reset" })] })] }), _jsxs("p", { className: "text-center text-slate-600 mt-6 text-sm", children: ["Already registered?", ' ', _jsx("a", { href: "#", className: "text-blue-700 hover:underline", children: "Log in" })] })] }) }));
}
