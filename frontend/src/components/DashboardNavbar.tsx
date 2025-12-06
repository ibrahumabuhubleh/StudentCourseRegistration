import { FiBell, FiUser } from "react-icons/fi";

export default function DashboardNavbar() {
  return (
    <header className="bg-white p-4 border-b flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900">Lernify Dashboard</h1>

      <div className="flex items-center gap-6">
        <FiBell size={22} className="cursor-pointer text-gray-600" />
        <FiUser size={22} className="cursor-pointer text-gray-600" />
      </div>
    </header>
  );
}
