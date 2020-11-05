import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/footer/Footer";
import Services from "./components/pages/services/Services";
import Products from "./components/pages/products/Products";
import SignUp from "./components/pages/sign-up/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/product" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
