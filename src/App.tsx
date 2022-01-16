import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
    }
  ]
};

function App() {
  return (
    <>
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutPage />
      </Elements>
    </>
  );
}

export default App;
