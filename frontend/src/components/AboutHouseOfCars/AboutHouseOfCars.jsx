import "./AboutHouseOfCars.css";

function AboutHouseOfCars() {
  return (
    <div className="container_about">
      <div>
        <img
          src="../src/assets/img/about/bookCar.png"
          className="img_about"
          alt="Book a car"
        />
      </div>
      <div>
        <h1 className="titre_about">About Our Car Rental App</h1>
        <p className="content_about">
          House of Cars is a car rental application. Easy to use, simply select
          the city of your choice to find vehicles made available by our
          companies and organizations available. A comfort or casual option is
          also available. In order to allow you to make ethical choices,
          electric vehicles are also part of our fleet.
        </p>
        <p className="content_about">
          Are you a car rental professional and you want to benefit from our
          service? Contact us directly through our form. We will respond to you
          as soon as possible.
        </p>
        <p className="content_about">
          House of Cars is an application in beta test mode. That is why rentals
          are currently free in order to test our service and benefit from your
          feedback. Which we hope will be numerous! We take this opportunity to
          thank our partners who are following us in our projects.
        </p>
        <p className="content_about">Happy driving to all.</p>
      </div>
    </div>
  );
}

export default AboutHouseOfCars;
