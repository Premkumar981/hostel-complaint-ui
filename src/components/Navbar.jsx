import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h2 className="logo">🏨 Hostel CMS</h2>

        <nav className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create Complaint</Link>
          <Link to="/complaints">Complaints</Link>
          <Link to="/users">Users</Link>
        </nav>
      </div>
    </header>
  );
}
