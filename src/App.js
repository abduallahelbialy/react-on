import "./App.css";
import "./all.min.css";
import "./three.css";
import Header from "./app/Header";
import Landing from "./app/Landing";
import Articles from "./app/Articles";
import GALLERY from "./app/GALLERY";
import Features from "./app/Features";
import Testimonials from "./app/Testimonials";
import Services from "./app/Services";
import Skills from "./app/Skills";
import Iwork from "./app/Iwork";
import Events from "./app/Events";
import Pricing from "./app/Pricing";
import Videos from "./app/Videos";
import Stats from "./app/Stats";
import Discount from "./app/Discount";
import Footer from "./app/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} 
from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Articles" element={<Articles />} />
        <Route exact path="/GALLERY" element={<GALLERY />} />
        <Route exact path="/Features" element={<Features />} />
        <Route exact path="/Testimonials" element={<Testimonials />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/Iwork" element={<Iwork />} />
        <Route exact path="/Events" element={<Events />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/Videos" element={<Videos />} />
        <Route exact path="/Stats" element={<Stats />} />
        <Route exact path="/Discount" element={<Discount />} />
        <Route exact path="/Footer" element={<Footer />} />
      </Routes>
      <Articles />
      <GALLERY />
      <Features />
      <Testimonials />
      <Services />
      <Skills />
      <Iwork />
      <Events />
      <Pricing />
      <Videos />
      <Stats />
      <Discount />
      <Footer />
    </Router>
  );
}



export default App;
