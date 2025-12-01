export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-semibold text-gray-900">Lernify</h3>
          <p className="text-sm text-gray-500 mt-2">
            Learn anything, anytime.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>
          <ul className="text-sm text-gray-500 mt-2 space-y-2">
            <li>Courses</li>
            <li>Categories</li>
            <li>Instructors</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Lernify for Teachers</h3>
          <ul className="text-sm text-gray-500 mt-2 space-y-2">
            <li>Teach on Lernify</li>
            <li>Instructor Dashboard</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="text-sm text-gray-500 mt-2 space-y-2">
            <li>Help Center</li>
            <li>Report Issues</li>
          </ul>
        </div>

      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lernify. All rights reserved.
      </div>
    </footer>
  );
}
