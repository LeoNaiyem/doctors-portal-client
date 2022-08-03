import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/AuthProvider";
import Appointment from "./pages/Appointment/Appointment";
import AddDoctor from "./pages/DashBoard/AddDoctor";
import AllUsers from "./pages/DashBoard/AllUsers";
import DashBoard from "./pages/DashBoard/DashBoard";
import DashboardHome from "./pages/DashBoard/DashboardHome";
import History from "./pages/DashBoard/History";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivateOutlet from "./pages/Login/PrivateOutlet/PrivateOutlet";
import RequireAdmin from "./pages/Login/RequireAdmin/RequireAdmin";
import Register from "./pages/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="appointment" element={<Appointment />} />
          <Route path="dashboard" element={<DashBoard />}>
            <Route index element={<DashboardHome />} />
            <Route path="history" element={<History />} />
            <Route path="*" element={<RequireAdmin />}>
              <Route path="users" element={<AllUsers />} />
              <Route path="addDoctor" element={<AddDoctor />} />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
