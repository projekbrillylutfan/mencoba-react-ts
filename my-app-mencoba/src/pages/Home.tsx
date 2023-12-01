import { useEffect, useState } from "react";

interface UserEntity {
  id: number;
  username: string;
  email: string;
}

interface CarsEntity {
  id: number;
  car_name: string;
  car_categories: string;
  car_size: string;
  status_rental: string;
  created_by: UserEntity;
}

const cars_api_base_url: string = 'http://localhost:8080';

export default function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch(cars_api_base_url + '/api/cars');
      const responseJSON = await response.json();
      console.log("response", response);

      setCars(responseJSON.data.cars)
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>List Cars</div>

      <div>
        {! cars.length && <div>Data Kosong</div>}
        {cars &&
          cars.map((cars: CarsEntity) => (
            <div key={cars.id}>
              <h1 className="flex">nama mobil: {cars.car_name}</h1>
              <p>ketegori mobil: {cars.car_categories}</p>
              <p>ukuran mobil: {cars.car_size}</p>
              <p>status mobil: {cars.status_rental}</p>
              <p>dibuat oleh : {cars.created_by.username}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
