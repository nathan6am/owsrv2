const fetchCars = async (serverAddress: string) => {
  const res = await fetch(`${serverAddress}/cars`);
  return res.json();
};

export default async function CarsList() {
  const cars = await fetchCars("http://localhost:7000");
  return (
    <div>
      {cars.map((car: any) => (
        <div key={car.key}>{car.name}</div>
      ))}
    </div>
  );
}
