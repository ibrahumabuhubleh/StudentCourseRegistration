export default function StudentProfile() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>

      <form className="space-y-6 bg-white shadow-sm border rounded-xl p-6">
        <div>
          <label className="font-medium text-gray-800">Full Name</label>
          <input
            type="text"
            className="w-full mt-1 border px-4 py-3 rounded-lg focus:border-red-700 outline-none"
            defaultValue="John Harvard"
          />
        </div>

        <div>
          <label className="font-medium text-gray-800">Email</label>
          <input
            type="email"
            className="w-full mt-1 border px-4 py-3 rounded-lg focus:border-red-700 outline-none"
            defaultValue="john@example.com"
          />
        </div>

        <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800">
          Save Changes
        </button>
      </form>
    </div>
  );
}
