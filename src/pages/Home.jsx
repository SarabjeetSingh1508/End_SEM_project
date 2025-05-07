import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Membership from "../components/Membership/Membership";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";


function Home() {
  return <>
  <Navbar/>
  <Hero/>
  <Services/>
  <Membership/>
  <SuccessStories/>
  <Testimonials />
  <Footer/>
   </>;
}

export default Home;

