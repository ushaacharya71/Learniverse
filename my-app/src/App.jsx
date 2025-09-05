import React from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Recource from "./components/Recource";
import Projects from "./components/Projects";
import Aboutt from "./components/Aboutt";
import Reviews from "./components/Reviews";
import PreTestimonials from "./components/PreTestimonials";
import PreProjects from "./components/PreProjects";
import Workshop from "./components/Workshop";
import CardOne from "./components/CardOne";
import Roadmap from "./components/Roadmap";
import MeetingPage from "./components/Meetingpage";
import Whyus from "./components/Whyus";

function App() {
  return (
    <div>
      {/* Your content will go here */}
      <Navbar />
      <LandingPage />
      <Aboutt />
      <Workshop />
       <CardOne />
        <Roadmap />
         <PreProjects />
           <Projects />
            <Recource />
             <Whyus />
             <Reviews />
              <Footer />



      {/*










      <MeetingPage /> */}

    </div>
  );
}

export default App;
