import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Experties from "./Pages/Experties";
import Agents from "./Pages/Agents";
import Featured from "./Pages/Featured";
import Testemonial from "./Pages/Testemonial";
import Footer from "./Pages/Footer";
import Servicecard from "./Components/Servicecard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Service />
              <Servicecard />
              <Experties />
              <Agents />
              <Featured />
              <Testemonial />
              <Footer />
            </>
          }
        />

        <Route
         path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
         <Route
          path="/projects"
          element={
            <>
              <Service />
              <Servicecard />
            </>
          }
        />

        <Route path="/contacts" element={<Footer />} />

        <Route path="/blogs" element={<Featured />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
