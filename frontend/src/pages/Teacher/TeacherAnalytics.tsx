export default function TeacherAnalytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
      <p className="text-gray-600 mt-2">Track your teaching performance and insights.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white border shadow-sm rounded-lg p-6">
          <h3 className="font-semibold text-gray-900">Monthly Students</h3>
          <p className="text-4xl font-bold text-red-700 mt-3">120</p>
        </div>

        <div className="bg-white border shadow-sm rounded-lg p-6">
          <h3 className="font-semibold text-gray-900">Course Reviews</h3>
          <p className="text-4xl font-bold text-blue-700 mt-3">230</p>
        </div>

        <div className="bg-white border shadow-sm rounded-lg p-6">
          <h3 className="font-semibold text-gray-900">Revenue</h3>
          <p className="text-4xl font-bold text-green-600 mt-3">$820</p>
        </div>

      </div>
    </div>
  );
}
