// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section className="section skills">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        <li>
          <strong>Testing Types:</strong> Manual Testing, Functional Testing, Regression Testing, UAT, Test Case Design
        </li>
        <li>
          <strong>Automation:</strong> Selenium WebDriver (Python - In Progress), Cucumber BDD (Learning)
        </li>
        <li>
          <strong>API Testing:</strong> Postman
        </li>
        <li>
          <strong>Programming & Scripting:</strong> Python, JavaScript, HTML5, CSS3, Bootstrap, C
        </li>
        <li>
          <strong>Bug Tracking Tools:</strong> Jira
        </li>
        <li>
          <strong>Databases:</strong> SQL
        </li>
        <li>
          <strong>Tools & Platforms:</strong> LifeAsia, L400, VS Code, Git, GitHub, Excel
        </li>
        <li>
          <strong>Methodologies & Concepts:</strong> SDLC, STLC, Agile/Scrum, Test Automation Concepts
        </li>
      </ul>
    </section>
  );
};

export default Skills;