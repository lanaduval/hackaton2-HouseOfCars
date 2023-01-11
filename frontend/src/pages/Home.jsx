import TestBack from "../components/TestBack";
import Navbar from "../components/layout-components/Navbar/Navbar";
import Footer from "../components/layout-components/Footer/Footer";
import FiltreBar from "../components/FiltreBar/FiltreBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <FiltreBar />
      <Footer />
      <TestBack />
    </>
  );
}
