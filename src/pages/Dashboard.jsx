import { Link } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import ComplaintTable from "../components/ComplaintTable";
import "./Dashboard.css";

export default function Dashboard() {

  const stats = {
    total: 24,
    open: 10,
    progress: 8,
    resolved: 6
  };

  const recentComplaints = [
    { id: 1, title: "Broken Chair", category: "CARPENTRY", assignedTo: "Ram", status: "OPEN", date: "2026-02-01" },
    { id: 2, title: "Light not working", category: "ELECTRICAL", assignedTo: "Shyam", status: "IN_PROGRESS", date: "2026-02-02" },
    { id: 3, title: "Water leakage", category: "PLUMBING", assignedTo: "Ram", status: "RESOLVED", date: "2026-02-03" },
    { id: 4, title: "Fan noise", category: "ELECTRICAL", assignedTo: "Shyam", status: "OPEN", date: "2026-02-04" },
    { id: 5, title: "Ragging complaint", category: "RAGGING", assignedTo: "Admin", status: "IN_PROGRESS", date: "2026-02-05" }
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      {/* ACTION BUTTONS */}
      <div className="dashboard-actions">
        <Link to="/create" className="btn primary">+ Create Complaint</Link>
        <Link to="/complaints" className="btn secondary">View All Complaints</Link>
      </div>

      <div className="cards-container">
        <SummaryCard title="Total Complaints" count={stats.total} color="#38bdf8" />
        <SummaryCard title="Open" count={stats.open} color="#facc15" />
        <SummaryCard title="In Progress" count={stats.progress} color="#fb923c" />
        <SummaryCard title="Resolved" count={stats.resolved} color="#22c55e" />
      </div>

      <h2 style={{ marginTop: "40px" }}>Recent Complaints</h2>
      <ComplaintTable complaints={recentComplaints} />
    </div>
  );
}
