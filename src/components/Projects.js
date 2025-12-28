// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="section projects">
      <h2>Projects</h2>
      <ul className="project-list">

        {/* Portfolio Website */}
        <li>
          <h3>💼 Portfolio Website</h3>
          <p>
            Designed and developed a responsive personal portfolio using
            <strong> React.js</strong> to showcase professional experience,
            technical skills, certifications, and projects. Implemented a clean UI,
            smooth scrolling, and section-based navigation for better user experience.
          </p>
          <ul>
            <li>
              Implemented <strong>responsive design</strong> and optimized navigation
              to improve usability and engagement.
            </li>
            <li>
              Deployed on <strong>Netlify</strong> with a <strong>custom domain</strong>,
              enabling fast updates and reducing release time by
              <strong> 5–10 minutes per update</strong>.
            </li>
          </ul>
          <a
            href="https://aniket-2827.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/aniketsrivastava89/aniket_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '15px' }}
          >
            GitHub
          </a>
        </li>

        {/* Disease Prediction System */}
        <li>
          <h3>🩺 Disease Prediction & Medicine Recommendation System</h3>
          <p>
            Developed a machine learning - based system to predict probable diseases
            based on user symptoms and suggest basic medicines using
            <strong> Python</strong>, <strong>Scikit-learn</strong>, and <strong>Pandas</strong>.
          </p>
          <p>
            Implemented and evaluated models using Decision Tree and Naive Bayes
            classifiers with a simple user interface for symptom input and prediction.
          </p>
          <a
            href="https://github.com/aniketsrivastava89/DiseasePredictionSystemUsingML"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        {/* IndianShoppingHub */}
        <li>
          <h3>🛍️ IndianShoppingHub (E-Commerce Platform)</h3>
          <p>
            Built a full-stack e-commerce platform using <strong>JavaScript</strong>,
            <strong> HTML</strong>, <strong>SCSS</strong>, and <strong>Strapi</strong>
            (headless CMS).
          </p>
          <p>
            Implemented product browsing, shopping cart functionality, and inventory
            management with a focus on clean UI, efficient data flow, and
            user-centric design.
          </p>
          <a
            href="https://github.com/aniketsrivastava89/IndianShoppingHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        {/* Table Tennis Game */}
        <li>
          <h3>🏓 Table Tennis Game</h3>
          <p>
            Developed a browser-based table tennis game using
            <strong> HTML5 Canvas</strong> and <strong>JavaScript</strong>.
          </p>
          <p>
            Implemented paddle movement, collision detection, scoring logic,
            and basic game physics with smooth cross-browser performance.
          </p>
          <a
            href="https://github.com/aniketsrivastava89/Ping_Tennis_game"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        {/* Digital Clock */}
        <li>
          <h3>⏰ Digital Clock</h3>
          <p>
            Created a real-time digital clock application using
            <strong> Python (Tkinter)</strong> to display hours, minutes, and seconds.
          </p>
          <p>
            Strengthened understanding of GUI development, real-time updates,
            and event-driven programming.
          </p>
          <a
            href="https://github.com/aniketsrivastava89/Digital_Clock"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

      </ul>
    </section>
  );
};

export default Projects;
