import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-height-screen bg-gray-50 py-20 px-4">
      <div className="bg-white shadow-lg border rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create Your Account
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Join thousands of learners on <span className="text-red-700 font-semibold">Lernify</span>
        </p>

        <form className="space-y-6">
          <div>
            <label className="font-medium text-gray-800">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 border px-4 py-3 rounded-lg outline-none focus:border-red-700"
              placeholder="John Harvard"
            />
          </div>

          <div>
            <label className="font-medium text-gray-800">Email</label>
            <input
              type="email"
              className="w-full mt-1 border px-4 py-3 rounded-lg outline-none focus:border-red-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="font-medium text-gray-800">Password</label>
            <input
              type="password"
              className="w-full mt-1 border px-4 py-3 rounded-lg outline-none focus:border-red-700"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-red-700 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
