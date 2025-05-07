import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Real Voices, Real Transformations</h2>
      <p>
        See How FitLife Studio Has Helped Our Members Achieve Their Fitness Goals and Transform
        Their Lives Through Expert Training and Supportive Community.
      </p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            Joining FitLife Studio was the best decision I ever made for my health. The trainers
            are incredibly supportive, and the personalized programs have helped me achieve results!
          </p>
          <div className="author">
            <img src="" alt="Ishan Maheshwari" />
            <div>
              <h4>Ishan Maheshwari</h4>
              <p>Marketing Executive</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            FitLife Studio’s group classes are so much fun and motivating. I’ve lost 20 pounds and
            gained a ton of confidence. The community here is amazing!
          </p>
          <div className="author">
            <img src="" alt="Avneet Singh" />
            <div>
              <h4>Avneet Singh</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>
            The holistic approach at FitLife Studio has improved my overall well-being. The
            combination of strength training, cardio, and wellness programs has been life-changing.
          </p>
          <div className="author">
            <img src="" alt="Sarabjeet Singh" />
            <div>
              <h4>Sarabjeet Singh</h4>
              <p>Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;