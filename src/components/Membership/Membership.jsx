// filepath: /Users/derek/Capstone/Workout with Friends copy/src/components/Membership/Membership.jsx
import React from "react";
import "./Membership.css";

const Membership = () => {
  return (
    <section className="membership" id="pricing">
      <h2>Choose the Perfect Plan</h2>
      <div className="membership-plans">
        <div className="plan">
          <h3>Basic Plan</h3>
          <p>₹1000/mo</p>
          <ul>
            <li>Access to gym equipment</li>
            <li>Personalized workout plans</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Premium Plan</h3>
          <p>₹2000/mo</p>
          <ul>
            <li>All Basic Plan benefits</li>
            <li>Access to group classes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Membership;