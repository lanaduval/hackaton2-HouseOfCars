import "./AboutHouseOfCars.css";

function AboutHouseOfCars() {
  return (
    <div className="container">
      <h1 className="titre">About Our Car Rental App</h1>
      <img
        src="../src/assets/img/about/bookCar.png"
        className="img"
        alt="Book a car"
      />
      <p className="content">
        Our car rental application is designed specifically for Amazon
        employees. The app allows Amazon employees to rent cars for personal or
        business use at discounted rates. The app also allows for easy pick-up
        and drop-off of the cars at designated Amazon locations.
      </p>
      <p className="content">
        With our app, Amazon employees can have access to a wide range of
        vehicles to choose from, including economy, luxury, and SUV options. Our
        user-friendly interface makes it easy to find and reserve the perfect
        vehicle for your needs.
      </p>
    </div>
  );
}

export default AboutHouseOfCars;
