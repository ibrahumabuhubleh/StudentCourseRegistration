import usePageTransition from "../../hooks/usePageTransition";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const { transitioning, goWithTransition } = usePageTransition();

  return (
    <div className={transitioning ? "fade-out" : "fade-in"}>

      {/* Back to Home Button */}
      <button
        onClick={() => goWithTransition("/")}
        className="mb-6 px-4 py-2 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
      >
        ← Back to Home
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
      <p className="text-gray-600 mt-2">
        Continue your learning journey with your active courses.
      </p>

      {/* Dashboard Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white shadow-sm border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Active Courses</h3>
          <p className="text-3xl font-bold text-red-700 mt-2">3</p>
        </div>

        <div className="bg-white shadow-sm border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Completed</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">7</p>
        </div>

        <div className="bg-white shadow-sm border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Certificates</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
        </div>

      </div>

    </div>
  );
}
