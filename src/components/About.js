// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section
      className="section about"
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: '1.6',
        color: '#e0e0e0',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#a4b8ff',
        }}
      >
        About Me
      </h2>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/mee.jpg`}
            alt="Aniket Srivastava"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          />
          <a
            href="/Aniket_Srivastava_Resume.pdf"
            download="Aniket_Srivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '12px',
              padding: '10px 16px',
              backgroundColor: '#3498db',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            Resume
          </a>
        </div>

        <div>
          <p style={{ color: '#cccccc' }}>
           Hello! I'm <strong style={{ color: '#ffffff' }}>Aniket Srivastava</strong>, a Computer Science graduate currently
           working as a <strong style={{ color: '#ffffff' }}>Test Engineer</strong> at
           <strong style={{ color: '#ffffff' }}> 1TX Pvt. Ltd.</strong>, with
           <strong> 1 year of experience</strong> in insurance domain QA, specializing in
           <strong> LifeAsia</strong> and <strong> L400</strong> systems. I have hands-on expertise in
           <strong> manual functional, regression, and UAT testing</strong>, along with strong skills in
           <strong> test case design</strong> and <strong> Jira-based defect management</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
