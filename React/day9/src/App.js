import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Services from "./components/Services";
import Error from "./components/Error";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectiveRoute from "./components/ProtectiveRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectiveRoute><Home /></ProtectiveRoute>} />
            <Route path="about" element={<ProtectiveRoute><Aboutus /></ProtectiveRoute>} />
            <Route path="contact" element={<ProtectiveRoute><Contactus /></ProtectiveRoute>} />
            <Route path="services" element={<Services />} />

            {/* <Route path="/:id" element={<UserProfile />} /> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
