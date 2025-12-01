export default function CreateCourse() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Create a New Course</h1>

      <form className="space-y-8 bg-white border shadow-sm rounded-xl p-8">

        <div>
          <label className="font-semibold text-gray-900">Course Title</label>
          <input
            type="text"
            className="w-full border px-4 py-3 rounded-lg mt-1 focus:border-red-700 outline-none"
            placeholder="e.g. Introduction to Data Science"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-900">Short Description</label>
          <textarea
            className="w-full border px-4 py-3 rounded-lg mt-1 focus:border-red-700 outline-none"
            rows={4}
            placeholder="A beginner-friendly introduction..."
          />
        </div>

        <div>
          <label className="font-semibold text-gray-900">Thumbnail URL</label>
          <input
            type="text"
            className="w-full border px-4 py-3 rounded-lg mt-1 focus:border-red-700 outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-900">Course Price</label>
          <input
            type="number"
            className="w-full border px-4 py-3 rounded-lg mt-1 focus:border-red-700 outline-none"
            placeholder="19.99"
          />
        </div>

        <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800">
          Publish Course
        </button>
      </form>
    </div>
  );
}
