import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  HomeThree,
  AboutTwo,
  Services,
  Blog,
  Contact,
  Careers, 
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/Quote";
import FAQChatbot from "./components/common/FAQChatbot"; // Add this import

function App() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="w-full bg-white dark:bg-[#0F172A]">
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home-3" />} />
          <Route path="/home-3" element={<HomeThree />} />
          <Route path="/about-2" element={<AboutTwo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} /> 
        </Routes>
      </div>
      
      <NewsLetter />
      <Footer />
      <BackToTopButton showButton={showButton} />
      <FAQChatbot /> {/* Add this line here */}
    </div>
  );
}

export default App;