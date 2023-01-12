import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./Paiement.css";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setPaymentSuccess(false);
    } else {
      // Send paymentMethod.id to your server
      // const { data } = await axios.post('/pay', { paymentMethodId: paymentMethod.id });

      setError(null);
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <div className="card-element">
        <CardElement />
      </div>
      {error && <div className="error">{error}</div>}
      {paymentSuccess ? (
        <div className="success">Payment Successful</div>
      ) : (
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      )}
    </form>
  );
}

export default PaymentForm;