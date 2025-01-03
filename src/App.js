import { Bell } from "lucide-react";
import React from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import NotificationsPage from "./components/notification";
import CalendarView from "./components/notificationCalander";
import { useCommunication } from "./context/data";
import AdminModule from "./routes/adminModule";
import CompanyListPage from "./routes/companies";
import UserDashboard from "./routes/userDashboard";

function App() {
  const { overdueCommunicationsCount } = useCommunication();
  return (
    <Router>
      <div className="app-container">
        <nav className="main-navigation">
          <div className="logo">ENTNT ASSESMENT</div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Add Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Company List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/notification" className="overdue-notification">
                <Bell size={24} />
                {overdueCommunicationsCount > 0 && (
                  <span className="notification-badge">
                    {overdueCommunicationsCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminModule />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/company" element={<CompanyListPage />} />
            <Route path="/notification" element={<NotificationsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
