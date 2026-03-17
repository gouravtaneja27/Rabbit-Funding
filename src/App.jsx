import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./component/common/Navbar";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import HowItWorks from "./pages/HowItWorks";
import Testimonial from "./pages/Testimonial";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
