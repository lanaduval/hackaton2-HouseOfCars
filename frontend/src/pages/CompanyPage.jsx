import NavbarOtherPages from "../components/layout-components/NavbarOtherPages/NavbarOtherPages";
import Footer from "../components/layout-components/Footer/Footer";
import Card from "../components/cardCompany/CardsCompany";
import "../assets/styles/CompanyPage.css";

function CompanyPage() {
  return (
    <div>
      <NavbarOtherPages />
      <Card />
      <Footer />
    </div>
  );
}

export default CompanyPage;
