import { Link } from "react-router-dom";

export default function ManageCourses() {
  const courses = [
    {
      id: 1,
      title: "Python for Beginners",
      students: 340,
      rating: 4.8,
      status: "Published",
    },
    {
      id: 2,
      title: "Machine Learning Essentials",
      students: 190,
      rating: 4.7,
      status: "Draft",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Manage Courses</h1>

        <Link
          to="/teacher/create-course"
          className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800"
        >
          + Create Course
        </Link>
      </div>

      <div className="mt-10 bg-white rounded-xl shadow-sm border p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-3 font-semibold">Course Title</th>
              <th className="py-3 font-semibold">Students</th>
              <th className="py-3 font-semibold">Rating</th>
              <th className="py-3 font-semibold">Status</th>
              <th className="py-3 font-semibold"></th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b">
                <td className="py-4">{course.title}</td>
                <td>{course.students}</td>
                <td>{course.rating}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      course.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
                <td>
                  <button className="text-red-700 font-semibold hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
