// filepath: /Users/derek/Capstone/Workout with Friends copy/src/components/Services/Services.jsx
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Premium Fitness Services</h2>
      <p>Tailored Workouts, Expert Guidance, and Comprehensive Programs to Meet All Your Fitness Needs</p>
      <div className="services-grid">
        <div className="service-card">
          <img src="/src/assets/images/personal_trainer.jpg" alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.</p>
          <a href="#learn-more" className="btn-learn-more">Learn More</a>
        </div>
        <div className="service-card">
          <img src="src/assets/images/group_fit.jpg" alt="Group Fitness Classes" />
          <h3>Group Fitness Classes</h3>
          <p>Join our dynamic and motivating group classes, ranging from yoga to high-intensity interval training, designed for all fitness levels.</p>
          <a href="#learn-more" className="btn-learn-more">Learn More</a>
        </div>
        <div className="service-card">
          <img src="src/assets/images/nutrition_guide.avif" alt="Nutrition Guidance" />
          <h3>Nutrition Guidance</h3>
          <p>Nutrition plans and advice from our certified nutritionists to complement your fitness routine and enhance your results.</p>
          <a href="#learn-more" className="btn-learn-more">Learn More</a>
        </div>
        <div className="service-card">
          <img src="src/assets/images/wellness_program.jpg" alt="Wellness Programs" />
          <h3>Wellness Programs</h3>
          <p>Wellness programs that include stress management, mental well-being, and recovery techniques to support your overall health.</p>
          <a href="#learn-more" className="btn-learn-more">Learn More</a>
        </div>
        <div className="service-card">
          <img src="src/assets/images/cardio_workout.webp" alt="Cardio Workouts" />
          <h3>Cardio Workouts</h3>
          <p>Boost your endurance and cardiovascular health with our variety of cardio classes and equipment, tailored to all fitness levels.</p>
          <a href="#learn-more" className="btn-learn-more">Learn More</a>
        </div>
        <div className="service-card">
          <img src="src/assets/images/strength_training.jpg" alt="Strength Training" />
          <h3>Strength Training</h3>
          <p>Build muscle and increase strength with our structured strength training programs and state-of-the-art weightlifting equipment.</p>
          <a href="#learn-more" className="btn-learn-more">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Services;