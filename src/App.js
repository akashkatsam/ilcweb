import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './Home/Index'
import './App.css'
import Footer from "./Include/Footer";
import Header from "./Include/Header";
import About from "./About/Index"
import Gallery from "./Gallery/Gallery";
import Media from "./Media/Media";
import Team from "./Team/Team";
function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />




     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

