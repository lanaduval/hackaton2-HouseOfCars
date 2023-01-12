import Card from "../components/card/Cards";
import "../assets/styles/CompanyPage.css";
import Navbar from "@components/layout-components/Navbar/Navbar";

function CompanyPage() {
  return (
    <div>
      <Navbar />
      <img className="LogoCompanyPage" src="" alt="logo" />
      <Card />
    </div>
  );
}

export default CompanyPage;
