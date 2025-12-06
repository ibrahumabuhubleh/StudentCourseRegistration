import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">

      <h1 className="text-6xl font-bold text-red-700 mb-4">404</h1>

      <p className="text-xl text-gray-700 mb-8">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800"
      >
        Go Home
      </Link>

    </div>
  );
}
