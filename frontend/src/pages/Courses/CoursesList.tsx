import CourseCard from "../../components/CourseCard";

export default function CoursesList() {
  const courses = [
    {
      id: 1,
      title: "Software Development for Engineers",
      instructor: "Kocsis Gergely",
      thumbnail: "soft.jpg",
      rating: 4.9,
      reviews: 1450,
      price: 39.99,
      description:
        "Learn modern software engineering practices, from version control to testing and deployment, tailored for engineering workflows.",
    },
    {
      id: 2,
      title: "Web Development",
      instructor: "Jane Smith",
      thumbnail: "web.jpg",
      rating: 4.6,
      reviews: 2100,
      price: 29.99,
      description:
        "Build responsive, accessible websites using HTML, CSS, and JavaScript, and get started with modern frontend frameworks.",
    },
    {
      id: 3,
      title: "Ethical Hacking",
      instructor: "Carlos Delgado",
      thumbnail: "ethical.jpg",
      rating: 4.7,
      reviews: 1750,
      price: 49.99,
      description:
        "Understand how attackers think, learn penetration testing basics, and practice responsible disclosure and security best practices.",
    },
    {
      id: 4,
      title: "Cybersecurity",
      instructor: "Dr. Nina Roberts",
      thumbnail: "cyber.jpg",
      rating: 4.8,
      reviews: 2300,
      price: 44.99,
      description:
        "Cover core cybersecurity concepts: threats, vulnerabilities, cryptography, secure architecture, and incident response planning.",
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      instructor: "Michael Zhang",
      thumbnail: "ai.jpg",
      rating: 4.7,
      reviews: 1980,
      price: 59.99,
      description:
        "Explore search, knowledge representation, and basic machine learning techniques that power modern AI systems.",
    },
    {
      id: 6,
      title: "Network Security",
      instructor: "Sarah Johnson",
      thumbnail: "network.jpg",
      rating: 4.5,
      reviews: 1120,
      price: 34.99,
      description:
        "Learn how to secure networks with firewalls, VPNs, intrusion detection, and best practices for enterprise environments.",
    },
    {
      id: 7,
      title: "Embedded Systems",
      instructor: "Dr. Peter Kovács",
      thumbnail: "embed.jpg",
      rating: 4.6,
      reviews: 890,
      price: 54.99,
      description:
        "Get hands-on with microcontrollers, sensors, and real-time systems, and learn how hardware and software interact.",
    },
    {
      id: 8,
      title: "Business Management",
      instructor: "Anna Müller",
      thumbnail: "business.jpg",
      rating: 4.4,
      reviews: 1300,
      price: 24.99,
      description:
        "Understand the basics of strategy, operations, leadership, and finance to manage projects and teams effectively.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Courses</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
