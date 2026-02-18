import "./SummaryCard.css";

export default function SummaryCard({ title, count, color }) {
  return (
    <div className="summary-card" style={{ borderLeft: `6px solid ${color}` }}>
      <h4>{title}</h4>
      <h2>{count}</h2>
    </div>
  );
}
