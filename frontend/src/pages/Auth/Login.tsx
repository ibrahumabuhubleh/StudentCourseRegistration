import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-height-screen bg-gray-50 py-20 px-4">
      <div className="bg-white shadow-lg border rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Log in to continue learning with <span className="text-red-700 font-semibold">Lernify</span>
        </p>

        <form className="space-y-6">
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
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          New to Lernify?{" "}
          <Link to="/signup" className="text-red-700 font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
