import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Message from "./pages/Message";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Final from "./pages/Final";
import PhotoThrow from "./pages/PhotoThrow";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Message />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Final />} /> */}
        <Route path="/gallery" element={<PhotoThrow />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
