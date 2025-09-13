function WasteSummary({ wasteData }) {
  const summary = wasteData.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + entry.amount;
    return acc;
  }, {});

  return (
    <div>
      <h3>Waste Summary</h3>
      <ul>
        {Object.entries(summary).map(([type, amount]) => (
          <li key={type}>{type}: {amount} items</li>
        ))}
      </ul>
    </div>
  );
}
export default WasteSummary;
