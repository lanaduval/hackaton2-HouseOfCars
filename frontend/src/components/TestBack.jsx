import { useState, useEffect } from "react";
import instance from "../helpers/axios";

export default function TestBack() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
    instance
      .get("/cars")
      .then((data) => {
        setCars(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
console.log(cars);
  return (
    <div>
      <h1>o</h1>
    </div>
  );
}
