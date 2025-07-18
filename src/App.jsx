import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import {ContactPage } from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import LoginPage from "./pages/LoginPage";
import TopUserDetailPage from "./pages/TopUserDetailPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/RegisterPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Register/>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-detail/:id" element={<UserDetailPage />} />
          <Route path="/top-user-detail/:id" element={<TopUserDetailPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
