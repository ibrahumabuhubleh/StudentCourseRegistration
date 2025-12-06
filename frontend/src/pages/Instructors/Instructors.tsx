export default function Instructors() {
  const instructors = [
    { name: "Dr. Alice Emerson", title: "Data Science Expert", img: "alice.jpg" },
    { name: "Prof. Michael Lee", title: "Machine Learning Author", img: "michael.jpg" },
    { name: "Dr. Kocsis Gergely", title: "Associate Professor", img: "prof.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Top Instructors</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {instructors.map((inst) => (
          <div className="bg-white border shadow-sm rounded-xl p-6 text-center">
            <img
              src={inst.img}
              className="w-32 h-32 mx-auto rounded-full object-cover shadow mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{inst.name}</h3>
            <p className="text-gray-600">{inst.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
