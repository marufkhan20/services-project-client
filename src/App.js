import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterArea from "./components/common/FooterArea";
import Navigation from "./components/common/Navigation";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderView from "./pages/OrderView";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ServiceDetails from "./pages/ServiceDetails";
import AddService from "./pages/admin/AddService";
import AdminHome from "./pages/admin/Home";
import Services from "./pages/admin/Services";

function App() {
  // const { pathname } = useLocation();
  return (
    <>
      <Navigation />
      <Routes>
        {/* user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/inbox/:orderId/:userId" element={<OrderView />} />

        {/* admin routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/services" element={<Services />} />
        <Route path="/admin/services/add-service" element={<AddService />} />
      </Routes>
      <FooterArea />
    </>
  );
}

export default App;
