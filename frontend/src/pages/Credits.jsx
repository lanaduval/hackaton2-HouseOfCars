import NavbarOtherPages from "../components/layout-components/NavbarOtherPages/NavbarOtherPages";
import Footer from "../components/layout-components/Footer/Footer";
import "../assets/styles/Credits.css";

function Credits() {
  return (
    <div div className="background">
      <NavbarOtherPages />
      <div className="ContainerCredit">
        <div className="Crew">
          <h1>Les Space-girls</h1>
        </div>
        <div className="Presentation">
          <div />
          <div className="Member">
            <img
              className="Photo"
              src="src/assets/img/crew/alicia.png"
              alt="alici dupil"
            />
            <br />
            <h3>Alicia Dupil</h3>
          </div>
          <div className="Member">
            <img className="Photo" src="src/assets/img/crew/lana.png" alt="" />
            <br />
            <h3>Lana Duval</h3>
          </div>
          <div className="Member">
            <img className="Photo" src="src/assets/img/crew/laure.png" alt="" />
            <br />
            <h3>Laure Janin</h3>
          </div>
          <div className="Member">
            <img
              className="Photo"
              src="src/assets/img/crew/vivien.png"
              alt=""
            />
            <br />
            <h3>Vivien Mereaux</h3>
          </div>
          <div className="Member">
            <img className="Photo" src="src/assets/img/crew/seb.png" alt="" />
            <br />
            <h3>Sébastien Artesi</h3>
          </div>
        </div>
      </div>
      <p>
        We are The Space-girls and we hope you enjoyed this project
        <br /> as much as we taked pleasure to realise it.
      </p>
      <Footer />
    </div>
  );
}

export default Credits;
