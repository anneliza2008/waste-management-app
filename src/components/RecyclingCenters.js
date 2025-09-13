function RecyclingCenters() {
  const centers = [
    { name: 'Green Recycling Hub', address: '123 Eco Street' },
    { name: 'E-Waste Solutions', address: '456 Tech Avenue' },
  ];

  return (
    <div>
      <h3>Recycling Centers</h3>
      <ul>
        {centers.map((center, index) => (
          <li key={index}>{center.name} - {center.address}</li>
        ))}
      </ul>
    </div>
  );
}
export default RecyclingCenters;
