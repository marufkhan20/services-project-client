import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import PrivateRoute from "./components/PriveRoute";
import PublicRoute from "./components/PublicRoute";
import FooterArea from "./components/common/FooterArea";
import Navigation from "./components/common/Navigation";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderView from "./pages/OrderView";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ServiceDetails from "./pages/ServiceDetails";
import VerifyAccount from "./pages/VerifyAccount";
import AddService from "./pages/admin/AddService";
import AdminHome from "./pages/admin/Home";
import Services from "./pages/admin/Services";
import UserList from "./pages/admin/UserList";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Toaster />
      <Navigation />
      <Routes>
        {/* user routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/verify-account/:userId/:profileId"
          element={
            <PublicRoute>
              <VerifyAccount />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route
          path="/profile/:userId"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/inbox/:orderId/:userId"
          element={
            <PrivateRoute>
              <OrderView />
            </PrivateRoute>
          }
        />

        {/* admin routes */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminHome />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <AdminPrivateRoute>
              <Services />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/services/add-service"
          element={
            <AdminPrivateRoute>
              <AddService />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminPrivateRoute>
              <UserList />
            </AdminPrivateRoute>
          }
        />
      </Routes>
      {!pathname.includes("/admin") && <FooterArea />}
    </>
  );
}

export default App;
