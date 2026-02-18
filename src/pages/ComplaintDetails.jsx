import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ComplaintDetails.css";

export default function ComplaintDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  // temporary dummy complaint
  const [complaint, setComplaint] = useState({
    id: id,
    title: "Broken Chair",
    description: "Chair leg is damaged",
    category: "CARPENTRY",
    assignedTo: "Ram",
    status: "OPEN",
    createdDate: "2026-02-01",
    attachment: "sample.pdf"
  });

  const handleStatusChange = (e) => {
    setComplaint({ ...complaint, status: e.target.value });
  };

  const updateStatus = () => {
    alert("Status updated to " + complaint.status);
  };

  return (
    <div className="details-container">
      <h1>Complaint Details</h1>

      <div className="details-card">

        <p><strong>Ticket ID:</strong> {complaint.id}</p>
        <p><strong>Title:</strong> {complaint.title}</p>
        <p><strong>Description:</strong> {complaint.description}</p>
        <p><strong>Category:</strong> {complaint.category}</p>
        <p><strong>Assigned To:</strong> {complaint.assignedTo}</p>
        <p><strong>Status:</strong> {complaint.status}</p>
        <p><strong>Created Date:</strong> {complaint.createdDate}</p>

        {/* Attachment */}
        {complaint.attachment && (
          <p>
            <strong>Attachment:</strong>
            <a href="#" className="attachment"> View File </a>
          </p>
        )}

        {/* Status Update */}
        <div className="status-update">
          <h3>Update Status</h3>

          <select value={complaint.status} onChange={handleStatusChange}>
            <option value="OPEN">OPEN</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="RESOLVED">RESOLVED</option>
          </select>

          <button onClick={updateStatus}>Update</button>
        </div>

        <button className="back-btn" onClick={() => navigate("/complaints")}>
          Back
        </button>

      </div>
    </div>
  );
}
