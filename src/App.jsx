import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
// import signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoutes";
import { AuthContext, AuthProvider} from "./context/AuthContext";
import Consult from "./pages/Consult";
import Track from "./pages/Track";
import Manage from "./pages/Manage";
import { useContext } from "react";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";


function AppContent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {/* Show Navbar only when not logged in */}
      {!isLoggedIn && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />

        {/* Private (Dashboard) Pages */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="track" element={<Track />} />
          <Route path="consult" element={<Consult />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
