import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import Home from "./pages/Home";
import CarReservationForm from "./pages/CarReservationForm";
import SeeMore from "./pages/SeeMore";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CarReservationForm from "./pages/CarReservationForm";
import PaymentPage from "/src/components/paiement/PaiementForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<SeeMore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/booking/:id" element={<CarReservationForm />} />
        <Route path="/pay" element={<PaymentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
