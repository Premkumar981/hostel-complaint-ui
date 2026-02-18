import { useState } from "react";
import ComplaintTable from "../components/ComplaintTable";
import "./ComplaintList.css";

export default function ComplaintList() {

  const allComplaints = [
    { id: 1, title: "Broken Chair", category: "CARPENTRY", assignedTo: "Ram", status: "OPEN", date: "2026-02-01" },
    { id: 2, title: "Light not working", category: "ELECTRICAL", assignedTo: "Shyam", status: "IN_PROGRESS", date: "2026-02-02" },
    { id: 3, title: "Water leakage", category: "PLUMBING", assignedTo: "Ram", status: "RESOLVED", date: "2026-02-03" },
    { id: 4, title: "Fan noise", category: "ELECTRICAL", assignedTo: "Shyam", status: "OPEN", date: "2026-02-04" },
    { id: 5, title: "Ragging complaint", category: "RAGGING", assignedTo: "Admin", status: "IN_PROGRESS", date: "2026-02-05" },
    { id: 6, title: "Door lock issue", category: "CARPENTRY", assignedTo: "Ram", status: "OPEN", date: "2026-02-06" },
    { id: 7, title: "Switch broken", category: "ELECTRICAL", assignedTo: "Shyam", status: "RESOLVED", date: "2026-02-07" }
  ];

  const [filtered, setFiltered] = useState(allComplaints);
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);


  const applyFilters = (status, category) => {
    let data = allComplaints;

    if (status) data = data.filter(c => c.status === status);
    if (category) data = data.filter(c => c.category === category);

    setFiltered(data);
  };

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

const paginatedData = filtered.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);


  return (
    <div>
      <h1>All Complaints</h1>

      {/* FILTERS */}
      <div className="filters">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            applyFilters(e.target.value, categoryFilter);
          }}
        >
          <option value="">All Status</option>
          <option value="OPEN">OPEN</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="RESOLVED">RESOLVED</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            applyFilters(statusFilter, e.target.value);
          }}
        >
          <option value="">All Category</option>
          <option value="CARPENTRY">CARPENTRY</option>
          <option value="ELECTRICAL">ELECTRICAL</option>
          <option value="PLUMBING">PLUMBING</option>
          <option value="RAGGING">RAGGING</option>
        </select>

        
      </div>

      <ComplaintTable complaints={paginatedData} />

      <div className="pagination">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      className={currentPage === i + 1 ? "active" : ""}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>
</div>

    </div>

    
  );
}
