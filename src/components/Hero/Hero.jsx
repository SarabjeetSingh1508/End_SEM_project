import React from "react";
import "./Hero.css";
import mainImage from "../../assets/images/main_image.jpg";const Hero = () => {
    return (
      <section
        className="hero"
        style={{backgroundImage: `url(${mainImage})` }}
      >
        <div className="hero-content">
          <h1>Transform Your Life with FitLife Studio</h1>
          <p>
            Join FitLife Studio Today and Experience Expert Training, Personalized
            Programs, and a Supportive Community to Achieve Your Fitness Goals.
          </p>
          <div className="hero-buttons">
            <a href="#get-started" className="btn-primary">
              Get Started
            </a>

          </div>
        </div>
      </section>
    );
  };

export default Hero;