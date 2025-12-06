import { Link } from "react-router-dom";

export default function TeacherSidebar() {
  return (
    <aside className="bg-white w-64 border-r p-6 hidden md:block">
      <h2 className="text-xl text-red-700 font-bold mb-6">Instructor Portal</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/teacher/dashboard">Dashboard</Link>
        <Link to="/teacher/manage-courses">Manage Courses</Link>
        <Link to="/teacher/create-course">Create Course</Link>
        <Link to="/teacher/analytics">Analytics</Link>
      </nav>
    </aside>
  );
}
