import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { api } from '../api';
export default function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [enrollments, setEnrollments] = useState([]);
    useEffect(() => {
        api.getCourses().then(setCourses);
        api.getStudents().then(setStudents);
        api.getEnrollments().then(setEnrollments);
    }, []);
    return (_jsxs("div", { className: "grid gap-6 md:grid-cols-3 fade-in", children: [_jsxs("div", { className: "card text-center", children: [_jsx("div", { className: "text-sm text-slate-500 mb-1", children: "Total Courses" }), _jsx("div", { className: "text-4xl font-bold", children: courses.length })] }), _jsxs("div", { className: "card text-center", children: [_jsx("div", { className: "text-sm text-slate-500 mb-1", children: "Total Students" }), _jsx("div", { className: "text-4xl font-bold", children: students.length })] }), _jsxs("div", { className: "card text-center", children: [_jsx("div", { className: "text-sm text-slate-500 mb-1", children: "Total Enrollments" }), _jsx("div", { className: "text-4xl font-bold", children: enrollments.length })] }), _jsxs("div", { className: "card md:col-span-3", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Recent Enrollments" }), enrollments.length === 0 ? (_jsx("p", { className: "text-slate-500 text-sm", children: "No enrollments yet." })) : (_jsx("ul", { className: "space-y-2", children: enrollments
                            .slice(-5)
                            .reverse()
                            .map(e => {
                            const student = students.find(s => s.id === e.studentId);
                            const course = courses.find(c => c.id === e.courseId);
                            return (_jsxs("li", { className: "text-sm border-b pb-2", children: [_jsx("b", { children: student?.fullName ?? 'Unknown' }), " enrolled in", ' ', _jsx("span", { className: "font-medium text-blue-700", children: course?.code ?? 'N/A' }), ' ', _jsxs("span", { className: "text-slate-500", children: ["(", new Date(e.createdAt).toLocaleString(), ")"] })] }, e.id));
                        }) }))] })] }));
}
