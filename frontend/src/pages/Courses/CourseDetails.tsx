import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-12">

      {/* Left Content */}
      <div className="md:col-span-2">

        <h1 className="text-4xl font-bold text-gray-900">
          Introduction to Python Programming
        </h1>

        <p className="text-gray-600 mt-2 text-lg">
          Learn the fundamentals of Python from scratch with hands-on exercises.
        </p>

        <p className="mt-4 text-gray-800">
          Instructor: <span className="font-semibold">Dr. Alice Emerson</span>
        </p>

        {/* What you’ll learn */}
        <h2 className="text-2xl font-bold mt-10 mb-4">What you’ll learn</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Python basics</li>
          <li>✔ Data types & control flow</li>
          <li>✔ Algorithms & problem solving</li>
          <li>✔ Real projects & applications</li>
        </ul>

      </div>

      {/* Sidebar */}
      <div className="bg-white shadow-md border rounded-lg p-6">
        <div className="bg-gray-200 h-48 rounded-lg mb-4">
          <p className="text-center text-gray-500 pt-20">Preview Video</p>
        </div>

        <p className="text-3xl font-bold mb-4">$19.99</p>

        <button className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800">
          Enroll Now
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Full access • Certificate included
        </p>
      </div>

    </div>
  );
}
