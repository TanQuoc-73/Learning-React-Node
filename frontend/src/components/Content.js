import React from 'react';
import '../assets/styles/Content.css'; // Nhập file CSS cho phần content

const Content = () => {
  return (
    <main className="content">
      <section className="intro-section">
        <h2>Hello World</h2>
        <p>Discover the best services and products tailored to your needs.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features-section">
        <h3>Our Features</h3>
        <div className="features-grid">
          <div className="feature">
            <h4>Feature One</h4>
            <p>Detailed description of the first feature.</p>
          </div>
          <div className="feature">
            <h4>Feature Two</h4>
            <p>Detailed description of the second feature.</p>
          </div>
          <div className="feature">
            <h4>Feature Three</h4>
            <p>Detailed description of the third feature.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;