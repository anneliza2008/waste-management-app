import { useState } from 'react';
import WasteLogger from './components/WasteLogger';
import WasteSummary from './components/WasteSummary';
import RecyclingCenters from './components/RecyclingCenters';

function App() {
  const [wasteData, setWasteData] = useState([]);

  const handleLogWaste = (entry) => {
    setWasteData((prev) => [...prev, entry]);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Waste Management App</h1>
      <WasteLogger onLogWaste={handleLogWaste} />
      <hr />
      <WasteSummary wasteData={wasteData} />
      <hr />
      <RecyclingCenters />
    </div>
  );
}
export default App;
