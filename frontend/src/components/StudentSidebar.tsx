import { Link } from "react-router-dom";

export default function StudentSidebar() {
  return (
    <aside className="bg-white w-64 border-r p-6 hidden md:block">
      <h2 className="text-xl text-red-700 font-bold mb-6">Student Portal</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/student/dashboard">Overview</Link>
        <Link to="/student/courses">My Courses</Link>
        <Link to="/student/profile">Profile</Link>
        <Link to="/student/settings">Settings</Link>
      </nav>
    </aside>
  );
}
