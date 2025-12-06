import StudentSidebar from "../components/StudentSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

export default function StudentDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <StudentSidebar />
      <div className="flex flex-col flex-grow">
        <DashboardNavbar title="Student Portal" />
        <main className="p-6"><Outlet /></main>
      </div>
    </div>
  );
}
