import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/sidebar";
import TopBar from "./components/topbar";
import "./App.css";

import { CaesarIntegrationLogs, MemberManagementLogs } from "./pages";

import Dashboard from "./pages/dashboard/index";
import Logs from "./pages/logs";

function App() {
  return (
    <Router>
      <>
        <div className="app">
          <SideBar></SideBar>
          <div className="content">
            <TopBar></TopBar>
            <Routes>
              <Route path="/" element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="caesarintegrationlogs"
                element={<CaesarIntegrationLogs />}
              />
              <Route
                path="membermanagementlogs"
                element={<MemberManagementLogs />}
              />
              <Route path="logs" element={<Logs />} />
              <Route path="*" element={<Navigate replace to="dashboard" />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
