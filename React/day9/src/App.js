import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Services from "./components/Services";
import Error from "./components/Error";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="services" element={<Services />} />

          <Route path="/:id" element={<UserProfile />} />

          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
