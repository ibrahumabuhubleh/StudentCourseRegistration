import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import StudentDashboardLayout from "./layouts/StudentDashboardLayout";
import TeacherDashboardLayout from "./layouts/TeacherDashboardLayout";

import Home from "./pages/Home/Home";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

import StudentDashboard from "./pages/Student/StudentDashboard";
import StudentCourses from "./pages/Student/StudentCourses";
import StudentProfile from "./pages/Student/StudentProfile";
import StudentSettings from "./pages/Student/StudentSettings";

import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import ManageCourses from "./pages/Teacher/ManageCourses";
import CreateCourse from "./pages/Teacher/CreateCourse";
import TeacherAnalytics from "./pages/Teacher/TeacherAnalytics";

import CoursesList from "./pages/Courses/CoursesList";
import CourseDetails from "./pages/Courses/CourseDetails";

import Categories from "./pages/Categories/Categories";
import Instructors from "./pages/Instructors/Instructors";

import NotFound from "./pages/Misc/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/courses" element={<CoursesList />} />
          <Route path="/course/:id" element={<CourseDetails />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/instructors" element={<Instructors />} />
        </Route>

        {/* Student portal */}
        <Route element={<StudentDashboardLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/courses" element={<StudentCourses />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/settings" element={<StudentSettings />} />
        </Route>

        {/* Teacher portal */}
        <Route element={<TeacherDashboardLayout />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/manage-courses" element={<ManageCourses />} />
          <Route path="/teacher/create-course" element={<CreateCourse />} />
          <Route path="/teacher/analytics" element={<TeacherAnalytics />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
