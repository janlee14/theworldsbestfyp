export function StatCards({ items }) {
  return (
    <div className="grid-5">
      {items.map((item) => (
        <div className="card" key={item.label}>
          <div className="muted" style={{ marginBottom: "0.35rem" }}>{item.label}</div>
          <div className="stat">{item.value}</div>
          {item.note ? <div className="muted" style={{ marginTop: "0.35rem", fontSize: "0.9rem" }}>{item.note}</div> : null}
        </div>
      ))}
    </div>
  );
}

export function BulletCards({ items }) {
  return (
    <div className="grid-2">
      {items.map((item) => (
        <div className="card" key={item.title}>
          <div className="subheading">{item.title}</div>
          <div className="muted">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export function DataTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table className="info-table">
        <thead>
          <tr>
            {columns.map((col) => <th key={col}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FlowDiagram({ steps }) {
  return (
    <div className="diagram">
      {steps.map((step, index) => (
        <div key={step.title} className="diagram">
          <div className="diagram-box">
            <div className="subheading">{step.title}</div>
            <div className="muted">{step.text}</div>
          </div>
          {index !== steps.length - 1 ? <div className="diagram-arrow">↓</div> : null}
        </div>
      ))}
    </div>
  );
}
