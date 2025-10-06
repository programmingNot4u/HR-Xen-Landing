import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BlogPageDynamic from "./pages/BlogPageDynamic";
import BlogPostDetail from "./pages/BlogPostDetail";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PricingPageDynamic from "./pages/PricingPageDynamic";
import SupportPageDynamic from "./pages/SupportPageDynamic";
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
          <Route path="/pricing" element={<PricingPageDynamic />} />
          <Route path="/support" element={<SupportPageDynamic />} />
          <Route path="/blog" element={<BlogPageDynamic />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
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
