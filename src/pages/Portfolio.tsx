import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDynamicCSS } from '../hooks/useDynamicCSS';
import styles from './Portfolio.css?inline';

export const Portfolio: React.FC = () => {
  useDynamicCSS(styles);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.card, .section-divider').forEach((el) => {
      observer.observe(el);
      if (el.classList.contains('card')) {
        el.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = el.getBoundingClientRect();
          (el as HTMLElement).style.setProperty('--mouse-x', `${mouseEvent.clientX - rect.left}px`);
          (el as HTMLElement).style.setProperty('--mouse-y', `${mouseEvent.clientY - rect.top}px`);
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="glow"></div>
      <div className="container">
        <header>
          <h1>Lucas Dash's</h1>
          <p className="header-desc">
            A curated archive of high-agency frontend applications exploring extreme variance in
            component density, spacing, motion dynamics, and typography.
          </p>
        </header>

        {/* PRIME HIGHLIGHT: LUCAS.CV */}
        <Link
          to="/dashboards/profile"
          className="card hero-card c-profile"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="card-meta">
            <div className="status-pill">
              <span className="pulse-dot"></span> 00 / Primary Profile
            </div>
            <span>Bento Spatial</span>
          </div>
          <div className="bottom-info">
            <div>
              <div className="card-title giant-title">Lucas.CV</div>
              <p className="hero-desc">Interactive resume and professional trajectory</p>
            </div>
            <div className="arrow giant-arrow">&rarr;</div>
          </div>
        </Link>

        {/* SECTION TITLE */}
        <div className="section-divider reveal" style={{ transitionDelay: '200ms' }}>
          UI / UX Explorations
        </div>

        <div className="dashboard-grid">
          <Link
            to="/dashboards/financial"
            className="card grid-card c-fin"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="card-meta">
              <span>01 / Finance</span>
              <span>Neoglassmorphism</span>
            </div>
            <div className="bottom-info">
              <div className="card-title">Nexus Fin.</div>
              <div className="arrow">&rarr;</div>
            </div>
          </Link>

          <Link
            to="/dashboards/sales"
            className="card grid-card c-sales"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="card-meta">
              <span>02 / CRM</span>
              <span>Minimalist Linear</span>
            </div>
            <div className="bottom-info">
              <div className="card-title">Sales Pipeline</div>
              <div className="arrow">&rarr;</div>
            </div>
          </Link>

          <Link
            to="/dashboards/sao_paulo_population"
            className="card grid-card c-sp"
            style={{ transitionDelay: '500ms' }}
          >
            <div className="card-meta">
              <span>03 / Demographics</span>
              <span>Editorial Monumental</span>
            </div>
            <div className="bottom-info">
              <div className="card-title">São Paulo</div>
              <div className="arrow">&rarr;</div>
            </div>
          </Link>

          <Link
            to="/dashboards/steam_games"
            className="card grid-card c-steam"
            style={{ transitionDelay: '600ms' }}
          >
            <div className="card-meta">
              <span>04 / Analytics</span>
              <span>Brutalist Hacker</span>
            </div>
            <div className="bottom-info">
              <div className="card-title">Steam Live</div>
              <div className="arrow">&rarr;</div>
            </div>
          </Link>

          <Link
            to="/dashboards/banana"
            className="card grid-card c-banana"
            style={{ transitionDelay: '700ms' }}
          >
            <div className="card-meta">
              <span>05 / Interactive</span>
              <span>High Motion Fun</span>
            </div>
            <div className="bottom-info">
              <div className="card-title">Banana Market</div>
              <div className="arrow">&rarr;</div>
            </div>
          </Link>
        </div>

        <div style={{ height: '15vh' }}></div>
      </div>
    </>
  );
};
