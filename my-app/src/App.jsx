import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Recource from "./components/Recource";
import Projects from "./components/Projects";
import Aboutt from "./components/Aboutt";
import Reviews from "./components/Reviews";
import PreProjects from "./components/PreProjects";
import Workshop from "./components/Workshop";
import CardOne from "./components/CardOne";
import Roadmap from "./components/Roadmap";
import Whyus from "./components/Whyus";

// Pages
import Meetingpage from "./pages/Meetingpage";

// ✅ Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

// ✅ Homepage with sections for smooth scroll
function HomePage() {
  return (
    <>
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <Aboutt />
        <Workshop />
      </section>
      <section id="programs">
        <PreProjects />
        <CardOne />
        <Roadmap />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resources">
        <Recource />
      </section>
      <section id="whyus">
        <Whyus />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
    </>
  );
}

// ✅ Layout wrapper (Navbar + Footer common)
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

// ✅ Main App with Routing
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/meeting"
          element={
            <Layout>
              <Meetingpage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
