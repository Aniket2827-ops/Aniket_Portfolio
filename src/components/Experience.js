// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section className="section experience">
      <h2>Professional Experience</h2>

      <div className="job">
      <h3>Test Engineer - Insurance Domain</h3>
     <p><em>1TX Pvt. Ltd.</em> | Chennai | Apr 2025 - Present</p>
     <ul>
     <li>
      Performed manual testing across 15+ life insurance products using
      <strong> LifeAsia</strong> and <strong> L400</strong>, covering New Business,
      Policy Servicing, Claims, Surrender, and Loan modules.
     </li>
     <li>
      Executed <strong>functional, regression, sanity, and UAT testing</strong> for
      Term, Endowment, and ULIP products, ensuring policy lifecycle accuracy and
      business rule compliance; improved defect detection by <strong>40%</strong>.
     </li>
     <li>
      Designed and maintained <strong>10+ test artifacts</strong> including test plans,
      detailed test cases, and execution reports to standardize QA processes and
      reduce new team member onboarding time by <strong>15 days</strong>.
     </li>
     <li>
      Validated policy workflows, <strong>claims processing</strong>, and
      <strong> customer data integrity</strong> across core insurance modules,
      minimizing data issues and ensuring reliable operations.
     </li>
     <li>
      Collaborated with product owners, business analysts, and developers to clarify
      requirements, support accurate coverage, and reduce rework by <strong>50%</strong>.
     </li>
     <li>
      Logged, tracked, and retested defects using <strong>Jira</strong> with clear
      reproduction steps and supporting evidence, enabling faster UAT sign-offs
      and reducing UAT cycle time by <strong>40%</strong>.
    </li>
  </ul>
</div>
</section>
  );
};

export default Experience;
