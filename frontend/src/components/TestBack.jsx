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
console.log(cars);
  return (
    <div>
      {cars.map((car,index) => (
        <h1 key={index}>{car.make}</h1>
        
      ))}
      <h1> o </h1>
    </div>
  );
}
