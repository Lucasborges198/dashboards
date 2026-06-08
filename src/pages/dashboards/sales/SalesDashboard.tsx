import React from 'react';
import { Link } from 'react-router-dom';
import { useSalesLogic } from './useSalesLogic';
import { useDynamicCSS } from '../../../hooks/useDynamicCSS';
import styles from './index.css?inline';

export const SalesDashboard: React.FC = () => {
  useDynamicCSS(styles);
  useSalesLogic();

  return (
    <div className="app-layout">
      {/* CSS-only mobile hamburger toggle */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
      <label htmlFor="nav-toggle" className="hamburger" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <label htmlFor="nav-toggle" className="nav-overlay"></label>

      <nav className="side-nav">
        <div className="brand">S.</div>
        <div className="nav-links">
          <Link
            to="/"
            title="Back"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          >
            &larr;
          </Link>
          <a href="#" className="active">
            <i className="icon-grid"></i>
          </a>
          <a href="#">
            <i className="icon-users"></i>
          </a>
          <a href="#">
            <i className="icon-chart"></i>
          </a>
        </div>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/100?img=33" alt="User" />
        </div>
      </nav>

      <main className="dashboard">
        <header className="topbar">
          <div className="search-box">
            <input type="text" placeholder="Search opportunities..." />
          </div>
          <div className="actions">
            <button className="btn-outline">Filter</button>
            <button className="btn-primary">+ New Lead</button>
          </div>
        </header>

        <div className="metrics-row">
          <div className="metric-card">
            <span className="label">Total Revenue</span>
            <div className="value-row">
              <h1>$1.2M</h1>
              <span className="trend up">↑ 12%</span>
            </div>
          </div>
          <div className="metric-card">
            <span className="label">Win Rate</span>
            <div className="value-row">
              <h1>64.2%</h1>
              <span className="trend up">↑ 2.1%</span>
            </div>
          </div>
          <div className="metric-card">
            <span className="label">Active Deals</span>
            <div className="value-row">
              <h1>142</h1>
              <span className="trend down">↓ 5</span>
            </div>
          </div>
        </div>

        <div className="pipeline-board">
          {/* Column 1 */}
          <div className="pipeline-col">
            <div className="col-header">
              <h3>Discovery</h3>
              <span className="count">4</span>
            </div>
            <div className="deals">
              <div className="deal-card">
                <h4>Acme Corp Enterprise</h4>
                <p>Stark Industries</p>
                <div className="deal-footer">
                  <span className="amount">$45,000</span>
                  <span className="agent">JD</span>
                </div>
              </div>
              <div className="deal-card">
                <h4>Q3 Software Sub</h4>
                <p>Globex</p>
                <div className="deal-footer">
                  <span className="amount">$12,500</span>
                  <span className="agent">AK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="pipeline-col">
            <div className="col-header">
              <h3>Proposal</h3>
              <span className="count">2</span>
            </div>
            <div className="deals">
              <div className="deal-card">
                <h4>SaaS Migration</h4>
                <p>Umbrella Corp</p>
                <div className="deal-footer">
                  <span className="amount">$80,000</span>
                  <span className="agent">JD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="pipeline-col">
            <div className="col-header">
              <h3>Negotiation</h3>
              <span className="count">1</span>
            </div>
            <div className="deals">
              <div className="deal-card warning">
                <h4>Annual Renewal</h4>
                <p>Initech</p>
                <div className="deal-footer">
                  <span className="amount">$150,000</span>
                  <span className="agent">LM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
