import React from 'react';
import { Link } from 'react-router-dom';
import { useSteamGamesLogic } from './useSteamGamesLogic';
import { useDynamicCSS } from '../../../hooks/useDynamicCSS';
import styles from './index.css?inline';

export const SteamGamesDashboard: React.FC = () => {
  useDynamicCSS(styles);
  useSteamGamesLogic();

  return (
    <div className="steam-container">
      <header className="masthead">
        <Link
          to="/"
          className="neo-button"
          style={{ marginBottom: '2rem', display: 'inline-block', textDecoration: 'none' }}
        >
          &larr; SYSTEM.MAIN
        </Link>
        <br />
        <div className="neo-badge">STEAM STATS API</div>
        <h1 className="mega-title">
          PLAYER
          <br />
          CONCURRENT
        </h1>
        <p className="hacker-text">LIVE GLOBAL TRACKING :: EXPERIMENTAL BUILD</p>
      </header>

      <main className="games-grid">
        {/* Game Card 1 */}
        <div className="game-card">
          <div className="card-inner">
            <div className="rank">#01</div>
            <h2>Counter-Strike 2</h2>
            <div className="players-live">
              <span className="live-dot"></span>
              <strong>1,423,599</strong>
            </div>
            <div className="neo-button">View Charts -&gt;</div>
          </div>
        </div>

        {/* Game Card 2 */}
        <div className="game-card">
          <div className="card-inner">
            <div className="rank">#02</div>
            <h2>Dota 2</h2>
            <div className="players-live">
              <span className="live-dot"></span>
              <strong>824,198</strong>
            </div>
            <div className="neo-button">View Charts -&gt;</div>
          </div>
        </div>

        {/* Game Card 3 */}
        <div className="game-card">
          <div className="card-inner">
            <div className="rank">#03</div>
            <h2>Cyberpunk 2077</h2>
            <div className="players-live">
              <span className="live-dot"></span>
              <strong>92,444</strong>
            </div>
            <div className="neo-button">View Charts -&gt;</div>
          </div>
        </div>
      </main>

      <section className="system-logs">
        <h3>&gt;_ NETWORK_STATUS</h3>
        <div className="log-window">
          <p>[2026.03.29 22:15:00] CONNECTED TO VALVE API SERVERS</p>
          <p>[2026.03.29 22:15:01] FETCHING CONCURRENT USERS: SUCCESS</p>
          <p>[2026.03.29 22:15:02] PARSING DATA... AWAITING RENDER</p>
        </div>
      </section>
    </div>
  );
};
