import { useState } from 'react';

function WasteLogger({ onLogWaste }) {
  const [type, setType] = useState('Plastic');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onLogWaste({ type, amount: parseInt(amount, 10) });
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Plastic</option>
        <option>E-waste</option>
        <option>Paper</option>
        <option>Organic</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (e.g., 1 item)"
      />
      <button type="submit">Log Waste</button>
    </form>
  );
}
export default WasteLogger;
