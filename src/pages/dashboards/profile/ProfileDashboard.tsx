import React from 'react';
import { Link } from 'react-router-dom';
import { useProfileLogic } from './useProfileLogic';
import { useDynamicCSS } from '../../../hooks/useDynamicCSS';
import styles from './index.css?inline';

export const ProfileDashboard: React.FC = () => {
  useDynamicCSS(styles);
  useProfileLogic();

  return (
    <>
      <div className="glow-bg"></div>
      <nav className="top-nav">
        <Link to="/" className="back-link">
          &larr; Voltar ao Menu
        </Link>
        <div className="status-pill">
          <span className="dot"></span> Open to Work
        </div>
      </nav>

      <main className="bento-grid">
        {/* Hero Box */}
        <div className="bento-box hero-box span-2">
          <div className="hero-content">
            <h1 className="name">Lucas Borges</h1>
            <h2 className="role">Frontend Software Angular/React Engineer</h2>
            <p className="bio">
              Frontend Developer with solid experience in the Angular and React ecosystems, focused
              on building Micro Frontends (MFE), web portals, and digital channels. Experienced in
              developing complex user journeys for corporate products, including digital sales and
              onboarding pipelines. Fluent in English, I actively integrate Prompt Engineering and
              AI tools (Devin CLI, Copilot CLI, Claude Code, and Gemini) into my workflow to
              accelerate delivery and craft agile, high-quality solutions.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/lucas-borges-21b472308/"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Lucasborges198"
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="avatar-container">
            {/* The image points to the old relative path, assuming it's in public or we can fix it later */}
            <img src="/prof-pic.jpg" alt="Lucas Borges" className="profile-photo" />
          </div>
        </div>

        {/* Experience */}
        <div className="bento-box experience-box span-1 row-2">
          <h3>Experience & Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="year">Actual</div>
              <div className="job-title">Frontend Angular Developer</div>
              <div className="company">F1RST Digital Services (Santander)</div>
            </div>
            <div className="timeline-item">
              <div className="year">Oct 2024</div>
              <div className="job-title">Promoted: Frontend Angular Developer</div>
              <div className="company">F1RST Digital Services (Santander)</div>
            </div>
            <div className="timeline-item">
              <div className="year">Jan 2024</div>
              <div className="job-title">IT Intern</div>
              <div className="company">F1RST Digital Services (Santander)</div>
            </div>
            <div className="timeline-item">
              <div className="year">2023</div>
              <div className="job-title">Systems Analysis and Development</div>
              <div className="company">FATEC</div>
            </div>
          </div>

          {/* Terminal Monitor */}
          <div className="terminal-monitor">
            <div className="term-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="term-title">guest@lucas.dashboard: ~</span>
            </div>
            <div className="term-body">
              <div id="typewriter"></div>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bento-box skills-box span-1">
          <h3>Tech Stack</h3>
          <div className="chip-container">
            <span className="chip">TypeScript</span>
            <span className="chip">JavaScript</span>
            <span className="chip">C</span>
            <span className="chip">Angular</span>
            <span className="chip">React</span>
            <span className="chip">Next</span>
          </div>
        </div>

        {/* Stats / Highlights */}
        <div className="bento-box highlight-box span-1">
          <div className="stat">
            <span className="number">1+</span>
            <span className="label">Years of Experience</span>
          </div>
          <div className="stat">
            <span className="number">10+</span>
            <span className="label">Projects Delivered</span>
          </div>
        </div>
      </main>
    </>
  );
};
