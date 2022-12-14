import { Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/blog" element={<Blog needFullHeight={true} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
