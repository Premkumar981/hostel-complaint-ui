import { Link } from "react-router-dom";
import "./ComplaintTable.css";

export default function ComplaintTable({ complaints }) {
  return (
    <div className="table-wrapper">
      <table className="complaint-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.title}</td>
              <td>{c.category}</td>
              <td>{c.assignedTo}</td>
              <td className={`status ${c.status.toLowerCase()}`}>{c.status}</td>
              <td>{c.date}</td>
              <td>
                <Link to={`/complaints/${c.id}`} className="view-btn">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
