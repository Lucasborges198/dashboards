import React from 'react';
import { Link } from 'react-router-dom';
import { useBananaLogic } from './useBananaLogic';
import { useDynamicCSS } from '../../../hooks/useDynamicCSS';
import styles from './index.css?inline';

export const BananaDashboard: React.FC = () => {
  useDynamicCSS(styles);
  useBananaLogic();

  return (
    <div className="peel-wrapper">
      <header className="fun-header">
        <div className="logo">🍌 BananaStats</div>
        <div>
          <Link
            to="/"
            className="toggle-switch"
            style={{ textDecoration: 'none', display: 'inline-block', marginRight: '1rem' }}
          >
            &larr; Home
          </Link>
          <div className="toggle-switch" style={{ display: 'inline-block' }}>
            Global Supply
          </div>
        </div>
      </header>

      <main className="fruit-grid">
        <div className="card hero-stat">
          <span className="emoji-bg">📈</span>
          <h3>Price Index (BPI)</h3>
          <h2>$1.24 / lb</h2>
          <div className="pill positive">+12% from last week</div>
        </div>

        <div className="card chart-stat">
          <h3>Top Exporters 🌎</h3>
          <ul className="ranking">
            <li>
              <span>1. Ecuador</span>
              <div className="bar-wrap">
                <div className="bar" style={{ width: '100%' }}></div>
              </div>
            </li>
            <li>
              <span>2. Philippines</span>
              <div className="bar-wrap">
                <div className="bar" style={{ width: '76%' }}></div>
              </div>
            </li>
            <li>
              <span>3. Costa Rica</span>
              <div className="bar-wrap">
                <div className="bar" style={{ width: '60%' }}></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="card weather-stat">
          <h3>Farm Weather Alert ⛅</h3>
          <div className="weather-info">
            <div className="temp">28°C</div>
            <p>Perfect ripening conditions in South America.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
