import { useState, useEffect } from "react";
import instance from "../helpers/axios";

export default function TestBack() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    instance
      .get("/cars")
      .then((result) => {
        setCars(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {cars.map((car, index) => (
        <>
          <h1 key={index}>{car.model}</h1>
          <h2>{car.make}</h2>
          <p>{car.year}</p>
          <p>{car.autonomy}</p>
          <p>{car.miles}</p>
          <p>{car.seats}</p>
          <p>{car.type}</p>
          <p>{car.city}</p>
        </>
      ))}
    </div>
  );
}
