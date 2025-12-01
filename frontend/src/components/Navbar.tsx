import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          {/* Put your actual logo as /public/logo.png */}
          <img
            src="logo.jpg"
            className="h-8 w-auto object-contain"
          />
          <span className="text-2xl font-extrabold tracking-tight text-red-700">
            Lernify
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/courses" className="hover:text-red-700">
            Courses
          </Link>
          <Link to="/categories" className="hover:text-red-700">
            Categories
          </Link>
          <Link to="/instructors" className="hover:text-red-700">
            Instructors
          </Link>

          {/* Portals */}
          <Link
            to="/student/dashboard"
            className="text-red-700 hover:underline"
          >
            Student Portal
          </Link>
          <Link
            to="/teacher/dashboard"
            className="text-red-700 hover:underline"
          >
            Teacher Portal
          </Link>

          {/* Auth */}
          <Link
            to="/login"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile nav - simple version */}
        <div className="md:hidden text-xs font-medium flex flex-col items-end gap-1">
          <Link to="/courses">Courses</Link>
          <Link to="/student/dashboard" className="text-red-700">
            Student
          </Link>
          <Link to="/teacher/dashboard" className="text-red-700">
            Teacher
          </Link>
        </div>
      </div>
    </nav>
  );
}
