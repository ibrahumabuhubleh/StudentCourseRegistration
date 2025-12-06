import usePageTransition from "../../hooks/usePageTransition";

export default function TeacherDashboard() {
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

      <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Track your teaching performance and manage your courses.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white shadow-sm border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Total Students</h3>
          <p className="text-3xl font-bold text-red-700 mt-2">540</p>
        </div>

        <div className="bg-white shadow-sm border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Active Courses</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
        </div>

        <div className="bg-white shadow-sm border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">Earnings</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">$2,340</p>
        </div>

      </div>
    </div>
  );
}
