import CourseCard from "../../components/CourseCard";

export default function StudentCourses() {
  const enrolledCourses = [
    {
      id: 1,
      title: "Intro to Python",
      instructor: "Dr. Alice",
      thumbnail: "/images/python.jpg",
      rating: 4.7,
      reviews: 1200,
      price: 0,
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      instructor: "Prof. Lee",
      thumbnail: "/images/ml.jpg",
      rating: 4.6,
      reviews: 800,
      price: 0,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
