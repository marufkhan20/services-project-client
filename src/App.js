import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterArea from "./components/common/FooterArea";
import Navigation from "./components/common/Navigation";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {/* user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout/:id" element={<Checkout />} />

        {/* admin routes */}
      </Routes>
      <FooterArea />
    </>
  );
}

export default App;
