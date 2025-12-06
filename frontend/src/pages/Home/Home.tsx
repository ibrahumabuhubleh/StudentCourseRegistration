import CourseCard from "../../components/CourseCard";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      instructor: "Dr. Alice Emerson",
      thumbnail: "python.jpg",
      rating: 4.7,
      reviews: 1200,
      price: 19.99,
    },
    {
      id: 2,
      title: "Data Science Bootcamp 2025",
      instructor: "Prof. Michael Lee",
      thumbnail: "data.jpg",
      rating: 4.8,
      reviews: 2200,
      price: 24.99,
    },
    {
      id: 3,
      title: "Machine Learning A–Z",
      instructor: "Dr. Kevin Thompson",
      thumbnail: "machine.jpg",
      rating: 4.6,
      reviews: 900,
      price: 29.99,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-10">
        {/* Left: text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Unlock your potential with{" "}
            <span className="text-red-700">world-class learning</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Lernify brings university-level education to your fingertips with expert-led courses,
            flexible schedules, and real certificates.
          </p>
          <Link
            to="/courses"
            className="inline-block mt-6 px-6 py-3 bg-red-700 text-white rounded-lg text-lg font-semibold hover:bg-red-800"
          >
            Explore Courses
          </Link>
        </div>

        {/* Right: your photo */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/logo.jpg"   // <-- put your photo as public/images/me.jpg
            alt="Lernify Instructor"
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-white"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {["Programming", "Data Science", "Business", "Design", "Marketing"].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow-sm border rounded-lg p-6 text-center font-medium hover:shadow-md cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <Link to="/courses" className="text-red-700 font-semibold">
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why Lernify */}
      <section className="mt-20 bg-white p-10 rounded-xl shadow-sm border">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Lernify?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals and university-level teachers.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Study anytime, anywhere, and progress at your own pace.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Earn Certificates</h3>
            <p className="text-gray-600">
              Boost your CV with recognized learning certificates.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
