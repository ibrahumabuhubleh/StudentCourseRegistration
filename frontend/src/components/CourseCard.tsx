import { Link } from "react-router-dom";

export default function CourseCard({ course }: any) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border"
    >
      <img src={course.thumbnail} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-yellow-600">{course.rating}</span>
          <span className="text-sm text-gray-400">({course.reviews})</span>
        </div>

        <div className="font-bold text-gray-900 mt-3 text-lg">
          {course.price === 0 ? "Free" : `$${course.price}`}
        </div>
      </div>
    </Link>
  );
}
