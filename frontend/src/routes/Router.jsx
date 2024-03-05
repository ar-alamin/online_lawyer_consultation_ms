import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Services from "../pages/Services";
import MyAccount from "../Dashboard/User-Account/MyAccount";
import Dashboard from "../Dashboard/Lawyer-Account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Contact from "../pages/Contact";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Chat from "../pages/Chat";
import Lawyers from "../pages/Lawyers/Lawyers";
import LawyerDetails from "../pages/Lawyers/LawyerDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lawyers" element={<Lawyers />} />
      <Route path="/lawyers/:id" element={<LawyerDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/chat/:user1/:user2" element={<Chat />} /> 
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["client"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lawyers/profile/me"
        element={
          <ProtectedRoute allowedRoles={["lawyer"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};

export default Router;
