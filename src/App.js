import "./App.css";
import Routes from "../src/Routes"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51OWvQIFgKHDpomfgNwdCL517Au8V3EBr36RRilRzQlMtvhwWsHEwohfZN5nZE0CtxQaT6HOMA4amJwMrniC2ifRS00xCGhWqmZ");

function App() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Routes/>
      </Elements>
    </div>
  );
}

export default App;
