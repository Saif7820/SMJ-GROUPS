import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";

// Layout
import MainLayout from "../layouts/MainLayout";

// Main Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Media from "../pages/Media";
import Contact from "../pages/Contact";
import Career from "../pages/Career";
import Blog from "../pages/Blog";

// Projects Pages (इमेज के अनुसार Project1 से Project4)
import GolfRidge from "../pages/Projects/Golf-Ridge";
import Suraksha from "../pages/Projects/Suraksha";
import Summit from "../pages/Projects/Summit";
import Coming from "../pages/Projects/Coming";


// 404 Page
const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-2xl font-semibold">
    404 - Page Not Found
  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Layout Wrap */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Top Level Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
             <Route path="blog" element={<Blog/>} />

          {/* Projects Group */}
          <Route path="projects">
          
            {/* Specific Project Routes */}
           <Route path="golf-ridge" element={<GolfRidge />} />
            <Route path="suraksha" element={<Suraksha />} />
            <Route path="summit" element={<Summit />} />
            <Route path="coming-soon" element={<Coming />} />
          
          </Route>

        </Route>
        

        {/* 404 Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
