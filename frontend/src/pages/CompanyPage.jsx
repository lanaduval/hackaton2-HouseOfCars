import Card from "../components/cardCompany/CardsCompany";
import "../assets/styles/CompanyPage.css";
import Navbar from "@components/layout-components/Navbar/Navbar";
import FiltreBar from "@components/FiltreBar/FiltreBar";
import Footer from "@components/layout-components/Footer/Footer";

function CompanyPage() {
  return (
    <div>
      <Navbar />
      <FiltreBar />
      <Card />
      <Footer />
    </div>
  );
}

export default CompanyPage;
