import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaiementForm";
import "./Paiement.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function PaymentPage() {
    return (
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    );
  }
  
  export default PaymentPage;