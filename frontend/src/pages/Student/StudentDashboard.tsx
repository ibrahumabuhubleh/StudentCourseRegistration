export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
      <p className="text-gray-600 mt-2">
        Continue your learning journey with your active courses.
      </p>

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
