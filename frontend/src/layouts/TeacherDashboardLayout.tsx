import TeacherSidebar from "../components/TeacherSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

export default function TeacherDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <TeacherSidebar />
      <div className="flex flex-col flex-grow">
        <DashboardNavbar title="Instructor Portal" />
        <main className="p-6"><Outlet /></main>
      </div>
    </div>
  );
}
