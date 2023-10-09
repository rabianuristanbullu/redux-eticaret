import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./container/PageContainer";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Card from "./pages/Card";

function App() {
  return (
    <div>
      <PageContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail/>} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </Router>
      </PageContainer>
    </div>
  );
}

export default App;
