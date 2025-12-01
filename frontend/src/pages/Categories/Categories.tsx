export default function Categories() {
  const categories = [
    "Programming",
    "Data Science",
    "Business",
    "Design",
    "Marketing",
    "Cybersecurity",
    "Mathematics",
    "AI & ML",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Explore Categories</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white border shadow-sm rounded-xl p-6 text-center text-lg font-semibold hover:shadow-md cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>

    </div>
  );
}
