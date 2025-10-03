import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SupportPage from "./pages/SupportPage";
import AnalyticsPage from "./pages/features/AnalyticsPage";
import AssetsPage from "./pages/features/AssetsPage";
import CoreHRPage from "./pages/features/CoreHRPage";
import EmployeeManagementPage from "./pages/features/EmployeeManagementPage";
import LeaveManagementPage from "./pages/features/LeaveManagementPage";
import PayrollPage from "./pages/features/PayrollPage";
import RecruitmentPage from "./pages/features/RecruitmentPage";
import TimeAttendancePage from "./pages/features/TimeAttendancePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features/core-hr" element={<CoreHRPage />} />
          <Route
            path="/features/employee-management"
            element={<EmployeeManagementPage />}
          />
          <Route path="/features/payroll" element={<PayrollPage />} />
          <Route
            path="/features/time-attendance"
            element={<TimeAttendancePage />}
          />
          <Route
            path="/features/leave-management"
            element={<LeaveManagementPage />}
          />
          <Route path="/features/analytics" element={<AnalyticsPage />} />
          <Route path="/features/assets" element={<AssetsPage />} />
          <Route path="/features/recruitment" element={<RecruitmentPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
